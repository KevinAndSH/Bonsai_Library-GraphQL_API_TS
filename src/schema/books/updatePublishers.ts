import { PublisherModel } from "../publishers/publisher.model"

export const addBookIdToPublisher = async (bookID: string, publisherID: string) => {
  return await PublisherModel.findByIdAndUpdate(publisherID, { $addToSet: { bookIDs: bookID } })
}

export const removeBookIdFromPublisher = async (bookID: string, publisherID: string) => {
  return await PublisherModel.findByIdAndUpdate(publisherID, { $pull: { bookIDs: bookID } })
}

export const updatePublishers = async (bookID: string, oldPublisherID: string, newPublisherID: string) => {
  if (oldPublisherID === newPublisherID) return
  
  await Promise.all([
    addBookIdToPublisher(bookID, newPublisherID),
    removeBookIdFromPublisher(bookID, oldPublisherID)
  ])
}
