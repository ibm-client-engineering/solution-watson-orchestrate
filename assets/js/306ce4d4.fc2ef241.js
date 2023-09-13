"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[844],{4137:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>h});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return t?n.createElement(h,o(o({ref:a},c),{},{components:t})):n.createElement(h,o({ref:a},c))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1560:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=t(7462),r=(t(7294),t(4137));const l={id:"solution-prepare",sidebar_position:1,title:"Prepare"},o=void 0,i={unversionedId:"Create/solution-prepare",id:"Create/solution-prepare",title:"Prepare",description:"Pre-Requisites",source:"@site/docs/3-Create/Prepare.md",sourceDirName:"3-Create",slug:"/Create/solution-prepare",permalink:"/solution-watson-orchestrate/Create/solution-prepare",draft:!1,editUrl:"https://github.com/ibm-client-engineering/solution-watson-orchestrate/tree/main/packages/create-docusaurus/templates/shared/docs/3-Create/Prepare.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"solution-prepare",sidebar_position:1,title:"Prepare"},sidebar:"tutorialSidebar",previous:{title:"Create",permalink:"/solution-watson-orchestrate/category/create"},next:{title:"Deploy",permalink:"/solution-watson-orchestrate/Create/solution-deploy"}},s={},p=[{value:"Pre-Requisites",id:"pre-requisites",level:2},{value:"(OTHER WO Modules)",id:"other-wo-modules",level:3},{value:"BAW Module",id:"baw-module",level:3},{value:"AWS Lambda OCR Module",id:"aws-lambda-ocr-module",level:3},{value:"AWS CLI Install",id:"aws-cli-install",level:4},{value:"AWS Lambda Setup",id:"aws-lambda-setup",level:4},{value:"Create Execution Role",id:"create-execution-role",level:5},{value:"Useful Commands",id:"useful-commands",level:5},{value:"Environment setup",id:"environment-setup",level:4},{value:"AWS Lambda Create Function",id:"aws-lambda-create-function",level:4},{value:"Useful Commands",id:"useful-commands-1",level:5}],c={toc:p},m="wrapper";function u(e){let{components:a,...t}=e;return(0,r.kt)(m,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-Requisites"),(0,r.kt)("h3",{id:"other-wo-modules"},"(OTHER WO Modules)"),(0,r.kt)("h3",{id:"baw-module"},"BAW Module"),(0,r.kt)("h3",{id:"aws-lambda-ocr-module"},"AWS Lambda OCR Module"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Watson Orchestrate environment with AWS Lambda skill"),(0,r.kt)("li",{parentName:"ul"},"AWS credentials for AWS Lambda"),(0,r.kt)("li",{parentName:"ul"},"AWS CLI installed"),(0,r.kt)("li",{parentName:"ul"},"Permissions to Create Roles, Create functions, PassRole, AttachRolePolicy",(0,r.kt)("img",{src:"https://zenhub.ibm.com/images/64b6ea16cb0d621557d315d9/12cb80b5-c410-48f9-9a0a-7ba3d0af9829",alt:"drawing",width:"400"}))),(0,r.kt)("h4",{id:"aws-cli-install"},"AWS CLI Install"),(0,r.kt)("p",null,"Install AWS cli:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"\nunzip awscli-bundle.zip\nsudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws\n')),(0,r.kt)("p",null,'Run and populate with appropriate values (set "Default output format" to "json")'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"aws configure\n")),(0,r.kt)("h4",{id:"aws-lambda-setup"},"AWS Lambda Setup"),(0,r.kt)("h5",{id:"create-execution-role"},"Create Execution Role"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the execution role that gives your function permission to access AWS resources. To create an execution role with the AWS CLI, use the create-role command."),(0,r.kt)("p",{parentName:"li"},"In the following example, you specify the trust policy inline. Requirements for escaping quotes in the JSON string vary depending on your shell."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'aws iam create-role --role-name <role_name> --assume-role-policy-document \'{"Version": "2012-10-17","Statement": [{ "Effect": "Allow", "Principal": {"Service": "lambda.amazonaws.com"}, "Action": "sts:AssumeRole"}]}\'\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To add permissions to the role, use the attach-policy-to-role command. Start by adding the AWSLambdaBasicExecutionRole managed policy and AWSLambdaRole policy ."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"aws iam attach-role-policy --role-name lambda-ex --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"aws iam attach-role-policy --role-name lambda-ex --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaRole\n")))),(0,r.kt)("h5",{id:"useful-commands"},"Useful Commands"),(0,r.kt)("p",null,"Get role info:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"aws iam get-role --role-name <role_name>\n")),(0,r.kt)("h4",{id:"environment-setup"},"Environment setup"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/python-package.html"},"https://docs.aws.amazon.com/lambda/latest/dg/python-package.html"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-awscli.html"},"https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-awscli.html")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to the project directory containing your lambda_function.py source code file. In this example, the directory is named my_function."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd my_function \n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new directory named package into which you will install your dependencies."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir package \n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install your dependencies in the package directory. The example below installs the Boto3 SDK from the Python Package Index using pip. If your function code uses Python packages you have created yourself, save them in the package directory."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pip install --target ./package boto3\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a .zip file with the installed libraries at the root."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd package\nzip -r ../my_deployment_package.zip .\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the lambda_function.py file to the root of the .zip file"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd ..\nzip my_deployment_package.zip lambda_function.py\n")))),(0,r.kt)("h4",{id:"aws-lambda-create-function"},"AWS Lambda Create Function"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"aws lambda create-function --function-name myFunction --runtime python3.11 --handler lambda_function.lambda_handler --role arn:aws:iam::748107796891:role/lambda-ex --zip-file fileb://Resources/OCRModule/my_deployment_package.zip \n")),(0,r.kt)("h5",{id:"useful-commands-1"},"Useful Commands"),(0,r.kt)("p",null,"List AWS lambda functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"aws lambda list-functions --max-items 10\n")),(0,r.kt)("p",null,"Delete lambda function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"aws lambda delete-function --function-name my-function\n")),(0,r.kt)("p",null,"Update function with new deployment file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"aws lambda update-function-code --function-name myFunction \\\n--zip-file fileb://myFunction.zip\n")))}u.isMDXComponent=!0}}]);