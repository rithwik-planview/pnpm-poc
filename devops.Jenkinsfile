@Library("jsl-one") _

def component = "unity_v2"
def config = [
        ecrUrl           : '411231698121.dkr.ecr.eu-west-1.amazonaws.com',
        ecrRepo          : "ci/${component}",
        ecrAccount       : "411231698121",
        sonarProjectKey  : "UnityApplication",
        sonarOrganization: 'clarizenportfolio',
        product         : 'one',
        domain          : "clarizen-ci.io",
        url_suffix      : "unity_v2",
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
        stage("Type Check") {
            steps {
                script {
                    sh """
                    set +x && . /home/jenkins/.profile
					nvm use
                    pnpm -r typecheck
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
                        pnpm -r test:ci
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
		stage("Build deploy folder") {
			steps {
				script {
					sh """
					set +x && . /home/jenkins/.profile
					nvm use
					pnpm -r deploy-package
					"""
				}
			}
		}
    }
    post {
        unsuccessful {
            script {
                mailNotifier(config)
            }
        }
    }
}
