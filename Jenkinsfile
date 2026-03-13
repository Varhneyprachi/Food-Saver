pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/Varhneyprachi/Food-Saver.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t food-saver .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker stop food-saver || true'
                sh 'docker rm food-saver || true'
                sh 'docker run -d -p 3000:3000 --name food-saver food-saver'
            }
        }
    }
}
