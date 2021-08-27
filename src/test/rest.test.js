import { linkAPI, matchParams } from '../rest/rest'

const topicLink = `${linkAPI}&page-size=8&section=news&order-by=oldest`
const sportLink = `${linkAPI}&page-size=3&section=sport|culture|lifeandstyle&order-by=newest`
const searchLink = `${linkAPI}&page-size=3&q=Covid-19&order-by=newest`

describe('check match parameter', () => {
  it('check parameter for topic', () => {
    const params = {
      'page-size': 8,
      section: 'news',
      'order-by': 'oldest'
    }
    expect(matchParams(params)).toEqual(topicLink)
  })

  it('check parameter for sport', () => {
    const params = {
      'page-size': 3,
      section: 'sport|culture|lifeandstyle',
      'order-by': 'newest'
    }
    expect(matchParams(params)).toEqual(sportLink)
  })

  it('check parameter for search', () => {
    const params = {
      'page-size': 3,
      q: 'Covid-19',
      'order-by': 'newest'
    }
    expect(matchParams(params)).toEqual(searchLink)
  })
})