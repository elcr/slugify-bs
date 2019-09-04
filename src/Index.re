[@bs.module]
external _slugify : (
    string,
    Js.t({
        .
        replacement: Js.Nullable.t(string),
        remove: Js.Nullable.t(Js.Re.t),
        lower: Js.Nullable.t(bool)
    })
) => string = "slugify";


let slugify = (~replacement=?, ~remove=?, ~lower=?, str) => {
    _slugify(str, {
        "replacement": Js.Nullable.fromOption(replacement),
        "remove": Js.Nullable.fromOption(remove),
        "lower": Js.Nullable.fromOption(lower)
    })
};
