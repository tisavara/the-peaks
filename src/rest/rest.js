import useAxios from 'axios-hooks'

export const linkAPI = 'https://content.guardianapis.com/search?show-fields=thumbnail%2CtrailText%2Cbody%2Cmain%2Cheadline%2CfirstPublicationDate&api-key=test'

export const matchParams = (params) => {
  const objEntries = Object.entries(params)
  const checkParams = objEntries.map(
    value => value.toString().replace(',', '=')
  ).toString().replaceAll(',', '&')

  return `${linkAPI}&${checkParams}`
}

export const useGetMethod = (params) => {
  const [res] = useAxios(matchParams(params))
  const { loading, error, data } = res
  const { response: { results } } = data || { response: { results: [] } }
  const fieldsData = results.map((value, index) => {
    const { fields } = value
    return {
      index: index,
      image: fields.thumbnail,
      header: fields.headline,
      contend: fields.trailText,
      detail: fields.body,
      media: fields.main,
      articleDate: fields.firstPublicationDate
    }
  })

  return { loading, error, data: fieldsData }
}
