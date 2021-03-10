export default function produtos(request, response) {
  const { id } = request.query

  response.json({
    id
  })
}