/**
 * A post have a id as identifier, title, description, date, author name
 * type: post / video / image
 * status: normal / newest / hot
 * path : has if type is video or image
 */
export interface ItemNewestPostType {
    id: string | "post_0";
    title: string | "newest post title";
    desc: string | "newest post desciption";
    date: string | "DD/MM/YYYY";
    author: string | "author";
    type : string | "type";
    status : string | "status";
    path? : string | "";
    brPath? :string | "";
}