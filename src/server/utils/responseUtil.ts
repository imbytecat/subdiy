type ApiResponse<T> = {
  code: number
  message: string
  data: T
}

export const successResponse = <T>(
  data: T,
  message: string = 'success',
): ApiResponse<T> => {
  return {
    code: 200,
    message,
    data,
  }
}

export const errorResponse = (
  message: string,
  code: number = 400,
): ApiResponse<null> => {
  return {
    code,
    message,
    data: null,
  }
}
