export interface BaseQuery<T> {
    eq?: T;
    not_eq?: T;
    gt?: T;
    lt?: T;
    gteq?: T;
    lteq?: T;
}
