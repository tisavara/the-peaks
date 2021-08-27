import { checkIconBookMark } from '../element/component/ButtonBookMark'

it('Check icon add Bookmark', () => {
  expect(checkIconBookMark('add')).toEqual('bookmarkoff-icon@2x.svg')
})

it('Check icon remove Bookmark', () => {
  expect(checkIconBookMark('remove')).toEqual('bookmarkon-icon@2x.svg')
})

it('Check icon view Bookmark', () => {
  expect(checkIconBookMark('view')).toEqual('bookmarkon-icon@2x.svg')
})
