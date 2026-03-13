pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git 'https://github.com/Varhneyprachi/Food-Saver.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t mern-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker stop mern-app || true'
                sh 'docker rm mern-app || true'
                sh 'docker run -d -p 3000:3000 --name mern-app mern-app'
            }
        }
    }
}
