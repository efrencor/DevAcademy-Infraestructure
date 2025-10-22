# DevAcademy Infrastructure
 
Plantillas de CloudFormation y buildspec para CI/CD en AWS (CodeCommit + CodeBuild + CodePipeline).
 
## Contenido
- `templates/s3_group_policy.yaml`: Bucket + Group + Policy (RW).
- `templates/ec2_s3_role.yaml`: EC2 con Role/InstanceProfile y acceso a S3.
- `pipeline/buildspec.yml`: Validación de plantillas en CodeBuild.
 
## Validación local
```bash
aws cloudformation validate-template --template-body file://templates/s3_group_policy.yaml
aws cloudformation validate-template --template-body file://templates/ec2_s3_role.yaml