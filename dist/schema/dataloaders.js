"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publisherLoader = exports.authorLoader = exports.bookLoader = void 0;
const lodash_1 = require("lodash");
const author_model_1 = require("./authors/author.model");
const book_model_1 = require("./books/book.model");
const publisher_model_1 = require("./publishers/publisher.model");
const groupAndSortById = (items, ids) => {
    const itemsById = (0, lodash_1.groupBy)(items, "_id");
    return ids.map((id) => { var _a; return (_a = itemsById[id]) !== null && _a !== void 0 ? _a : []; });
};
const bookLoader = async (bookIDs) => {
    const books = await book_model_1.BookModel.where("_id").in([...bookIDs]);
    return groupAndSortById(books, bookIDs);
};
exports.bookLoader = bookLoader;
const authorLoader = async (authorIDs) => {
    const authors = await author_model_1.AuthorModel.where("_id").in([...authorIDs]);
    return groupAndSortById(authors, authorIDs);
};
exports.authorLoader = authorLoader;
const publisherLoader = async (publisherIDs) => {
    const publishers = await publisher_model_1.PublisherModel.where("_id").in([...publisherIDs]);
    return groupAndSortById(publishers, publisherIDs);
};
exports.publisherLoader = publisherLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWxvYWRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2NoZW1hL2RhdGFsb2FkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFnQztBQUNoQyx5REFBNEQ7QUFDNUQsbURBQW9EO0FBQ3BELGtFQUF3RTtBQUV4RSxNQUFNLGdCQUFnQixHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3RDLE1BQU0sU0FBUyxHQUFHLElBQUEsZ0JBQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDdkMsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBVSxFQUFFLEVBQUUsV0FBQyxPQUFBLE1BQUEsU0FBUyxDQUFDLEVBQUUsQ0FBQyxtQ0FBSSxFQUFFLENBQUEsRUFBQSxDQUFDLENBQUE7QUFDckQsQ0FBQyxDQUFBO0FBRU0sTUFBTSxVQUFVLEdBQUcsS0FBSyxFQUFFLE9BQU8sRUFBbUIsRUFBRTtJQUMzRCxNQUFNLEtBQUssR0FBVyxNQUFNLHNCQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUNuRSxPQUFPLGdCQUFnQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQTtBQUN6QyxDQUFDLENBQUE7QUFIWSxRQUFBLFVBQVUsY0FHdEI7QUFFTSxNQUFNLFlBQVksR0FBRyxLQUFLLEVBQUUsU0FBUyxFQUFxQixFQUFFO0lBQ2pFLE1BQU0sT0FBTyxHQUFhLE1BQU0sMEJBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFBO0lBQzNFLE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFBO0FBQzdDLENBQUMsQ0FBQTtBQUhZLFFBQUEsWUFBWSxnQkFHeEI7QUFFTSxNQUFNLGVBQWUsR0FBRyxLQUFLLEVBQUUsWUFBWSxFQUF3QixFQUFFO0lBQzFFLE1BQU0sVUFBVSxHQUFnQixNQUFNLGdDQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQTtJQUN2RixPQUFPLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQTtBQUNuRCxDQUFDLENBQUE7QUFIWSxRQUFBLGVBQWUsbUJBRzNCIn0=