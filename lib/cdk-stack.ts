import * as cdk from 'aws-cdk-lib';
import {Repository} from 'aws-cdk-lib/aws-ecr';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const containerRegistry = new Repository(this, 'ContainerRepo', {
      repositoryName: 'my-container-repo',
      // imageScanOnPush: true, enable in SA
      
    });
  }
}
