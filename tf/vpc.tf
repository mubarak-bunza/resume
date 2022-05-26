resource "aws_vpc" "main" {
    cidr_block = "10.0.0.0/16"

    tag = {
        Name = "main"
    }
}

resource "aws_internet_gateway" "igw" {
    vpc_id = aws_vpc.main.id

    tags = {
        Name = "igw"
    }
}

resource "aws_subnet" "private-us-east-2a" {
    vpc_id = aws_vpc.main.id
    cidr_block = "10.0.0.0/19"
    availability_zone = "us-east-2a"

    tags = {
        "Name" = "private-us-east-2a"
        "kubernetes.io/role/internal-elb" = "1"
        "kubernetes.io/cluster/resume" = "owned"
    }
}

resource "aws_subnet" "public-us-east-2a" {
    vpc_id = aws_vpc.main.id
    cidr_block = "10.0.32.0/19"
    availability_zone = "us-east-2a"
    map_public_ip_on_lunch = true

    tags = {
        "Name" = "public-us-east-2a"
        "kubernetes.io/role/elb" = "1"
        "kubernetes.io/cluster/resume" = "owned"
    }
}

resource "aws_eip" "nat" {
    vpc = true

    tags = {
        Name = "nat"
    }
}

resource "aws_nat_gateway" "nat" {
    allocation_id = aws_eip.nat.id
    subnet_id = aws_subnet.public-us-east-2a.id

    tags = {
        Name = "nat"
    }

    depends_on = [aws_internet_gateway.igw] 
}

resource "aws_route_table" "private-rt" {
    vpc_id = aws_vpc.main.id

    route = [
        {
            cidr_block = "0.0.0.0/0"
            nat_gateway_id = aws_nat_gateway.nat.id
        }
    ]

    tags = {
        Name = "private-rt"
    }
}

resource "aws_route_table" "pubilc-rt" {
    vpc_id = aws_vpc.main.id

    route = [
        {
            cidr_block = "0.0.0.0/0"
            gateway_id = aws_internet_gateway.igw.id
        }
    ]

    tags = {
        Name = "public-rt"
    }
}

resource "aws_route_table_association" "private-us-east-2a" {
    subnet_id = aws_subnet.private-us-east-2a.id
    route_table_id = aws_route_table.private-rt.id
}

resource "aws_route_table_association" "public-us-east-2a" {
    subnet_id = aws_subnet.public-us-east-2a.id
    route_table_id = aws_route_table.public-rt.id
}

resource "aws_iam_role" "resume" {
    name = "resume-eks-cluster"

    assume_role_policy = <<POLICY
    {
        "Version": "2012-10-17,
        "Statement": [
            {
                "Effect": "Allow",
                "Principal": {
                    "Service": "eks.amazonaws.com"
                },
                "Action": "sts:AssumeRole"
            }
        ] 
    }
    POLICY
}

resource "aws_iam_role_policy_attachment" "resume-AmazonEKSClusterPolicy" {
    policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
    role = aws_iam_role.resume.name
}

resource "aws_eks_cluster" "resume" {
    name = "resume"
    role_arn = aws_iam_role.resume.arn

    vpc_config {
        subnet_ids = [
            aws_subnet.private-us-east-2a.id,
            aws_subnet.public-us-east-2a.id
        ]
    }

    depends_on = [aws_iam_role_policy_attachment.resume-AmazonEKSClusterPolicy]
}

resource "aws_iam_role" "nodes" {
    name = "eks-node-group-nodes"

    assume_role_policy = jsonencode({
        Statement = [{
            Action = "sts:AssumeRole"
            Effect = "Allow"
            Principal = {
                Service = "ec2.amazonaws.com"
            }
        }]
        Version = "2012-10-17"
    })
}

resource "aws_iam_role_policy_attachment" "nodes-AmazonEKSWorkerNodePolicy" {
    policy_arn = "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy"
    role = aws_iam_role.nodes.name
}

resource "aws_iam_role_policy_attachment" "nodes-AmazonEKS_CNI_Policy" {
    policy_arn = "arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy"
    role = aws_iam_role.nodes.name
}

resource "aws_iam_role_policy_attachment" "nodes-AmazonEC2ContainerRegistryReadOnly" {
    policy_arn = "arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
    role = aws_iam_role.nodes.name
}

resource "aws_eks_node_group" "private-nodes" {
    cluster_name = aws_eks_cluster.resume.name
    node_group_name = "private-nodes"
    node_role_arn = aws_iam_role.nodes.arn

    subnet_ids = [
        aws_subnet.private-us-east-2a.id
    ]

    capacity_type = "ON_DEMAND"
    instance_types = ["t2.small"]

    scaling_config {
        desired_size = 1
        max_size = 3
        min_size = 0
    }

    update_config {
        max_unavailable = 1
    }

    labels - {
        role = "general"
    }
}