pub fn reverse(input: &str) -> String {
    let mut rev = String::from("");

    for chr in input.chars().rev() {
        rev.push(chr);
    };

    return rev;
}