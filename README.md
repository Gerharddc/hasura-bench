Create the database and replicas using:
helm install timescale -f tsvalues.yaml timescaledb/timescaledb-single

Deploy hasura that connect directly to the master:
kubectl apply -f hasura.yaml

Connect to hasura and apply migrations:
kubectl port-forward svc/hasura 8080:8080
cd hasura
hasura migrate apply
cd ../src
node populate.js

