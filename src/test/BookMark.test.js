import { sortBookmarkGroup } from '../element/BookMark'

const dataSet1 = {
  index: 0,
  image: '',
  header: 'Test 1',
  contend: 'text test 1',
  detail: '<p>text test 1</p>',
  media: '',
  articleDate: '2021-08-25T21:05:39Z'
}

const dataSet2 = {
  index: 1,
  image: '',
  header: 'Test 2',
  contend: 'text test 2',
  detail: '<p>text test 2</p>',
  media: '',
  articleDate: '2021-08-24T21:05:39Z'
}

const dataSet3 = {
  index: 2,
  image: '',
  header: 'Test 3',
  contend: 'text test 3',
  detail: '<p>text test 3</p>',
  media: '',
  articleDate: '2021-08-23T21:05:39Z'
}

const dataList = [dataSet1, dataSet2, dataSet3]

it('Test newest order index 1', () => {
  expect(sortBookmarkGroup(dataList, 'newest')[0]).toBe(dataSet1)
})

it('Test newest order index 2', () => {
  expect(sortBookmarkGroup(dataList, 'newest')[1]).toBe(dataSet2)
})

it('Test newest order index 3', () => {
  expect(sortBookmarkGroup(dataList, 'newest')[2]).toBe(dataSet3)
})

it('Test oldest order index 1', () => {
  expect(sortBookmarkGroup(dataList, 'oldest')[0]).toBe(dataSet3)
})

it('Test oldest order index 2', () => {
  expect(sortBookmarkGroup(dataList, 'oldest')[1]).toBe(dataSet2)
})

it('Test oldest order index 3', () => {
  expect(sortBookmarkGroup(dataList, 'oldest')[2]).toBe(dataSet1)
})
