interface HttpRequest {
  body?: any;
}

interface HttpResponse {
  statusCode: number;
  body: any;
}

export { HttpResponse, HttpRequest };
