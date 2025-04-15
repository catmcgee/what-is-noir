fn main(num: u64) -> pub u64 {
    let mut approx = num;
    let mut better_approx = (approx + 1) / 2;

    for _ in 0..10 { 
        approx = better_approx;
        better_approx = (approx + num / approx) / 2;
    }

    better_approx
}

#[test]
fn test_main() {
    let number_to_square_root: u64 = 144; 
    let square_root = main(number_to_square_root);
    assert(square_root == 12);
}
