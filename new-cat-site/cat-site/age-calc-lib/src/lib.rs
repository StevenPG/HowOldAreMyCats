/// For generating bindings in JavaScript
use wasm_bindgen::prelude::*;

use chrono::{DateTime, Utc};
use num_integer::div_rem;

/// Function that calculates now - input time and converts
/// it into a readable format for callers
///
/// The goal of this method is to optimize the "math" being
/// done and do it in WASM rather than JavaScript. This is
/// really being done as a proof of concept, and some simple
/// math is a good example of using WASM for an "intensive"
/// operation.
///
/// * `input` -- incoming date used to generate a time-string based on elapsed time
#[wasm_bindgen]
pub fn time_since(input: &str) -> String {
    // TODO - return years and months as separate methods, write tests for it
    let parse_result = DateTime::parse_from_rfc3339(&*input);
    let duration = Utc::now().signed_duration_since(parse_result.unwrap());
    return string_format(duration.num_days());
}

#[wasm_bindgen]
pub fn hello_world() {
    print!("Hello,World!");
}

/// This function takes in a number of days and calculates
/// an age-string to be visualized to the user
///
/// * `num_days` number of days elapsed from now and original input time
fn string_format(num_days: i64) -> String {
    let result = div_rem(num_days, 365);
    let years = result.0;
    let remainder = result.1;
    format!("{} Years {} days", years, remainder)
}

#[cfg(test)]
mod tests {
    use crate::time_since;

    #[test]
    fn test_time_since() {
        // TODO - add a BUNCH of test inputs for year and months
        print!("{}", time_since("2019-10-12T07:20:50.52Z"))
    }
}