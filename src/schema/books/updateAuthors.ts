import { AuthorModel } from "../authors/author.model"

export const addBookIdToAuthors = async (bookID: string, authorIDs: string[]) => {
  return await AuthorModel.updateMany({ _id: { $in: authorIDs } }, { $addToSet: { bookIDs: bookID } })
}

export const removeBookIdFromAuthors = async (bookID: string, authorIDs: string[]) => {
  return await AuthorModel.updateMany({ _id: { $in: [...authorIDs] } }, { $pull: { bookIDs: bookID } })
}

export const updateAuthors = async (bookID: string, oldAuthorIDs: string[], newAuthorIDs: string[]) => {
  const addedAuthorIDs = newAuthorIDs.filter(id => !oldAuthorIDs.includes(id))
  const removedAuthorIDs = oldAuthorIDs.filter(id => !newAuthorIDs.includes(id))
  
  await Promise.all([
    addBookIdToAuthors(bookID, addedAuthorIDs),
    removeBookIdFromAuthors(bookID, removedAuthorIDs)
  ])
}
