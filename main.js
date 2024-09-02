function isMonotonic(array) {
	let up = false;
    let down = false;

    if (array.length <= 1) {
        return true;
    }

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
            up = true;
        } else if (array[i] < array[i - 1]) {
            down = true;
        }

        // If the array has both increasing and decreasing subsequences, it's not monotonic
        if (up && down) {
            return false;
        }
    }

    return true;
  }
