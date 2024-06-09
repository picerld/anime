export const getDataResponse = async(resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const datas = await response.json()
    return datas
}

export const getNestedAnimeRespone = async(resource, objectProperty) => {
    const response = await getDataResponse(resource)
    return response.data?.flatMap(item => item[objectProperty])
}

export const reproduce = (data, gap) => {
    if(data) {
        const first = ~~(Math.random() * (data.length - gap) + 1)
        const last = first + gap
    
        const response = {
            data: data.slice(first, last)
        }
    
        return response
    }
}