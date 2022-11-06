export const config = {
    "grpcUrl": "http://localhost:8080", // will send the request to envoy that listening on this port, then redirect to the backend service on port 50051 ( refer to conf in envoy.yaml)
}