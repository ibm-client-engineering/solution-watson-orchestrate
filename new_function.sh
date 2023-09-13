cd  Resources/OCRModule/package
zip -r ../my_deployment_package.zip .
cd ..
zip my_deployment_package.zip lambda_function.py
cd ..
cd ..
aws lambda delete-function --function-name myFunction
aws lambda create-function --function-name myFunction --runtime python3.11 --handler lambda_function.lambda_handler --role arn:aws:iam::748107796891:role/lambda-ex --zip-file fileb://Resources/OCRModule/my_deployment_package.zip