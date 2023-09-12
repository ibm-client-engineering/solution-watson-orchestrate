### Prerequisites

* AWS credentials for AWS Lambda
* AWS CLI installed
* Permissions to Create Roles, Create functions, PassRole, AttachRolePolicy
    <img src="https://zenhub.ibm.com/images/64b6ea16cb0d621557d315d9/12cb80b5-c410-48f9-9a0a-7ba3d0af9829" alt="drawing" width="400"/>

### AWS CLI Install

Install AWS cli:
```sh
curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
unzip awscli-bundle.zip
sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws
```
Run and populate with appropriate values (set "Default output format" to "json")
```
aws configure
```

### AWS Lambda Setup

#### Create Execution Role
1. Create the execution role that gives your function permission to access AWS resources. To create an execution role with the AWS CLI, use the create-role command.

    In the following example, you specify the trust policy inline. Requirements for escaping quotes in the JSON string vary depending on your shell.

    ```sh
    aws iam create-role --role-name <role_name> --assume-role-policy-document '{"Version": "2012-10-17","Statement": [{ "Effect": "Allow", "Principal": {"Service": "lambda.amazonaws.com"}, "Action": "sts:AssumeRole"}]}'
    ```
2. To add permissions to the role, use the attach-policy-to-role command. Start by adding the AWSLambdaBasicExecutionRole managed policy and AWSLambdaRole policy .

    ```sh
    aws iam attach-role-policy --role-name lambda-ex --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
    ```

    ```sh
    aws iam attach-role-policy --role-name lambda-ex --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaRole
    ```

#### Useful Commands

Get role info:
```sh
aws iam get-role --role-name <role_name>
```

### Environment setup

https://docs.aws.amazon.com/lambda/latest/dg/python-package.html
https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-awscli.html

1. Navigate to the project directory containing your lambda_function.py source code file. In this example, the directory is named my_function.
    ```sh
    cd my_function 
    ```
2. Create a new directory named package into which you will install your dependencies.
     ```sh
    mkdir package 
    ```
3. Install your dependencies in the package directory. The example below installs the Boto3 SDK from the Python Package Index using pip. If your function code uses Python packages you have created yourself, save them in the package directory.

    ```sh
    pip install --target ./package boto3
    ```
4. Create a .zip file with the installed libraries at the root.
    ```sh
    cd package
    zip -r ../my_deployment_package.zip .
    ```
5. Add the lambda_function.py file to the root of the .zip file
    ```sh
    cd ..
    zip my_deployment_package.zip lambda_function.py
    ```

### AWS Lambda Create Function
```sh
aws lambda create-function --function-name myFunction --runtime python3.11 --handler lambda_function.lambda_handler --role arn:aws:iam::748107796891:role/lambda-ex --zip-file fileb://Resources/OCRModule/my_deployment_package.zip 
```

#### Useful Commands
List AWS lambda functions:
```sh
aws lambda list-functions --max-items 10
```

Delete lambda function:

```sh
aws lambda delete-function --function-name my-function
```
Update function with new deployment file
```sh
aws lambda update-function-code --function-name myFunction \
--zip-file fileb://myFunction.zip
```

zip -r ../my_deployment_package.zip .
cd ..
zip my_deployment_package.zip lambda_function.py