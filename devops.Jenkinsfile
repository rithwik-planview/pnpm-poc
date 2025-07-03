@Library("jsl-one") _

def component = "unityV2"
def config = [
        ecrUrl           : '411231698121.dkr.ecr.eu-west-1.amazonaws.com',
        ecrRepo          : "ci/${component}",
        ecrAccount       : "411231698121",
        sonarProjectKey  : "UnityApplication",
        sonarOrganization: 'clarizenportfolio',
        product         : 'one',
        domain          : "clarizen-ci.io",
        url_suffix      : "unityV2",
        namespace       : 'one',
        recipients      : 'cc:pd-adaptivework-devops@planview.com',
        mailToDev       : true,
        TAG             : "${component}_${BUILD_NUMBER}",
        pr_url          : "",
        mailSubject     : ""
]
def sonarArgs = [
        "-Dsonar.javascript.lcov.reportPaths=coverage/lcov.info",
        "-Dsonar.sources=src"
]

pipeline {
    agent {
        label 'jenkins-pod-reactjs'
    }
    options {
        timeout(time: 60, unit: 'MINUTES')
        disableConcurrentBuilds()
        timestamps()
        skipDefaultCheckout true
    }
    stages {
        stage('Checkout'){
            steps {
                script {
                    utils.checkoutComponent(component, BRANCH_NAME)
                }
            }
        }
        stage("Setup Node and pnpm") {
            steps {
                script {
                    sh """
                    set +x && . /home/jenkins/.profile
                    nvm install \$(cat .nvmrc)
                    npm install -g pnpm
                    """
                }
            }
        }
        stage("Install Dependencies") {
            steps {
                script {
                    sh """
                    set +x && . /home/jenkins/.profile
					nvm use
                    pnpm install
                    """
                }
            }
        }
        stage("Compile i18n") {
            steps {
                script {
                    sh """
                    set +x && . /home/jenkins/.profile
					nvm use
                    pnpm -r i18n
                    """
                }
            }
        }
        stage("Lint") {
            steps {
                script {
                    sh """
                    set +x && . /home/jenkins/.profile
					nvm use
                    pnpm -r lint
                    """
                }
            }
        }
        stage("Format") {
            steps {
                script {
                    sh """
                    set +x && . /home/jenkins/.profile
					nvm use
                    pnpm format:check
                    """
                }
            }
        }
        stage("Type Check") {
            steps {
                script {
                    sh """
                    set +x && . /home/jenkins/.profile
					nvm use
                    pnpm -r typecheck:all
                    """
                }
            }
        }
        stage("Build") {
            steps {
                script {
                    sh """
                    set +x && . /home/jenkins/.profile
					nvm use
                    pnpm -r build
                    """
                }
            }
        }
        stage("Test") {
            steps {
                catchError(buildResult: "UNSTABLE", stageResult: "UNSTABLE") {
                    script {
                        sh """
						set +x && . /home/jenkins/.profile
						nvm use
                        pnpm -r test --coverage
                        """
                    }
                }
            }
            post {
                always {
                    script {
                        archiveArtifacts artifacts: "junit.xml", fingerprint: true, allowEmptyArchive: true
                        junit allowEmptyResults: true, testResults: 'junit.xml'
                    }
                }
            }
        }
        stage("Generate Local Build Drop") {
            steps {
                script {
                    sh """
                    set +x && . /home/jenkins/.profile
                    nvm use
                    pnpm -r deploy-package --skip-build
                    """
                }
      		}
        }
        stage("Upload Build to S3") {
            steps {
              script {
              
                def dateStr = new Date().format("yy_MM_dd")
                def gitSha = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
                env.packageName = "${dateStr}_${gitSha}"
                withAWS(region: 'eu-west-1', credentials: '411231698121-aws-creds') {
                        s3Upload(
                            workingDir: 'build-drop',
                            includePathPattern: '**/*',
                            bucket: 'modernization-build-drop',
                            path: "unityV2/${packageName}"
                        )
                }
              }
            }
        }
        stage("Deploy to QA") {
            when {
                expression {
                    return env.BRANCH_NAME == 'develop'
                }
            }
            steps {
                script {
                    def sourceBucket = 'modernization-build-drop'
                    def destBucket = 'unity-application-qa'
                    def cfDistribution = 'E3PJSDDQC0849R'
                    
                    withAWS(region: 'eu-west-1', credentials: 'jenkins-aws-rnd-s3-admin') {
                      sh """
                          echo "Syncing files from ${sourceBucket} to ${destBucket} ..."
                          aws s3 sync s3://${sourceBucket}/unityV2/${env.packageName}/ s3://${destBucket}/unityV2/
                          """
                            
                      // Flush the Cache on AWS CloudFront
                      sh """
                        echo "Flushing the cache on CloudFront Distribution for ${destBucket} ..."
                        aws cloudfront create-invalidation \
                            --distribution-id ${cfDistribution} \
                            --paths "/*"
                      """
                        }
                  }
            }
        }
    }
    post {
        success {
            script {
                def userId = currentBuild.getBuildCauses()[0].userId
                echo userId
                slackSend(color: 'green', channel: "@$userId", message: "<@$userId> Unity Service Build & CI Deployment to QA completed successfully for develop branch. Job Details: ${env.BUILD_URL} ")
                slackSend(color: 'green', channel: 'aw-qa-deployments', message: "<@$userId> Unity Service Build & CI Deployment to QA completed successfully for develop branch. Job Details: ${env.BUILD_URL} ")              
            }
        }
        failure {
            script {
                def userId = currentBuild.getBuildCauses()[0].userId
                echo userId
                slackSend(color: 'green', channel: "@$userId", message: "<@$userId> Unity Service Build & CI Deployment to QA failed for develop branch. Job Details: ${env.BUILD_URL} ")
                slackSend(color: 'green', channel: 'aw-qa-deployments', message: "<@$userId> Unity Service Build & CI Deployment to QA failed for develop branch. Job Details: ${env.BUILD_URL} ")  
            }
        }
        cleanup {
            script {
                cleanWs()
            }
        }
    }
}
