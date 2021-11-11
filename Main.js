/*
    ------------------- Common Interview Questions ---------------------
    FORMAT:
    - Title of Question
    - Description
    - Input/Output Examples
    - Step by Step Explanation of Algorithm
    - Time and Space Complexity
 */

/*
    ------------------- Reverse a String ---------------------
    Write a function that reverses a string. The input of the string
    is given in an array of characters s.

    Input: s = ["h", "e", "l", "l", "o"]
    Output: ["o", "l", "l", "e", "h"]

    1.) Instantiate two variables low and high representing two "pointers"
        that start at opposite ends of the list
    2.) While low < high then switch the values
    3.) return the list

    Time Complexity = O(n)
    Space Complexity = O(1)
 */

const reverseString = function(s) {
  if (s.length < 1) {
    return "";
  }

  let low = 0;
  let high = s.length - 1;

  while (low < high) {
    let temp = s[low];
    s[low++] = s[high];
    s[high--] = temp
  }
  return s;
};

console.log('------------------ Reverse String ----------------------');
const ArrayA = [];
console.log(reverseString(ArrayA));
const ArrayB = ["D", "O", "G"];
console.log(reverseString(ArrayB));

/*
  ------------------------ fizz buzz ----------------------------
  Given an Integer n, return a string array 1-indexed where:
   - answer[i] == "FizzBuzz" if i is divisible by 5 and 3
   - answer[i] == "Fizz" if i is divisible by 3
   - answer[i] == "Buzz" if i is divisible by 5
   - answer[i] == i if none of the conditions are true

   Input: 3
   Output: ["1", "2", "Fizz"]

   Input: 15
   Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

   1.) Instantiate an answer array to hold the fizzbuzz values
   2.) loop through each value and push into array
   2.) check each conditional and push the app

   Time Complexity O(n)
   Space Complexity O(n)

 */

const fizzBuzz = function (n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push("FizzBuzz");
    }
    else if (i % 3 === 0) {
      answer.push("Fizz");
    }
    else if (i % 5 === 0) {
      answer.push("Buzz")
    } else {
      answer.push(i);
    }
  }
  return answer;
}

console.log('------------------ Fizz Buzz ----------------------');
console.log(fizzBuzz(0));
console.log(fizzBuzz(1));
console.log(fizzBuzz(3));
console.log(fizzBuzz(15));


/*
  --------------------------- Single Number -----------------------------
  Given a non-empty array of Integers nums, every element appears twice except
  for one. Find that single one. You must implement a solution in linear time
  and use only constant extra space.

  Input: [2, 2, 1]
  Output: 1

  Input: [4, 1, 2, 1, 2]
  Output: 4

  Input: [1]
  Output: 1

  1.) Instantiate a variable x
  2.) Loop through each item in the array
  3.) x = x ^ array[i]
  4.) Return X

  This is the exclusive or XOR method
  - If we take XOR of zero and a bit it will return that bit
  - If we take XOR of the same bit it will return 0
  - If we XOR all numbers together it stands to reason we will find unique value

  (4 XOR 1 XOR 2 XOR 1 XOR 2)
  (4 XOR 0)
  (4)

  ^ is the XOR operator in JS


  Time Complexity: O(n)
  Space Complexity: O(1)

 */

const singleNumber = function (nums) {
  let x = nums[0];
  for (let i = 1; i < nums.length; i++) {
    x = x^nums[i];
  }
  return x;
};

console.log('--------------- Single Number ----------------');
console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));

/*
  Given the root of a Binary Tree return its maximum depth

  A binary trees maximum depth is the number of nodes along the longest path
  down to the farthest leaf node.

  Input: root = [3, 9, 20, null, null, 15, 7]
  Output: 3

  Input: root = [0,2,4,1,null,3,-1,5,1,null,6,null,8]
  Output: 4

  1.) instantiate a current max value at 1
  2.) Use DFS to probe to the bottom of the list
  3.) update current max along the way
  4.) return current max

  Time Complexity: O(V+E)
  Space Complexity: O(1)

 */

const maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
};

/*
    -------------------- Move Zeroes ----------------------
    Given an integer array nums, move all 0's to the end of it
    while maintaining the relative order of the non-zero elements.
    Note that you must do this in-place without making a copy of the array.

    Input: [0, 1, 0, 3, 12]
    Output: [1, 3, 12, 0, 0]

    Input: [0]
    Output: [0]

    1.) Instantiate a variable to keep track of lastNonZero index
    2.) Loop through values and swap value between 0s and non-zeros
    3.) Loop through lastNonZero and push 0 to the end of list

    Time Complexity:
    Space Complexity:

 */

const moveZeroes = function (nums) {

  let lastNonZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZero] = nums[i];
      lastNonZero += 1;
    }
  }

  for (let i = lastNonZero; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;

};

const ArrayC = [0, 1, 0, 3, 12];
console.log(moveZeroes(ArrayC));

/*
  --------------------------- Sum of Two Integers ---------------------------
  Given two integers a and b, return the sum of the two operators without
  using the + and - operators

  Input: [1, 2]
  Output: 3

  Input: [2, 3]
  Output: 5

  - We need to use Two's Compliment in order to determine value
  - We are summing in binary
  - & is a bitwise and

  1.) loop while int b != 0
  2.) int ans = a XOR b
  3.) int carry = (a & b) << 1
  4.) a = ans
  5.) b = carry
  6.) return a

  Time Complexity: O(n)
  Space Complexity: O(1)

 */

const twoSum = function (a, b) {
  while ( b !== 0) {
    let ans = a ^ b;
    let carry = (a & b) << 1;
    a = ans;
    b = carry;
  }
  return a;
}

console.log('---------------two sum-----------------');
console.log(twoSum(1, 3));
console.log(twoSum(10, 11));

/*
  ------------------------ Reverse a Linked List -------------------------
  Given the head of a singly linked list, reverse the list and return the
  reversed list

  Input: [1, 2, 3, 4, 5]
  Output: [5, 4, 3, 2, 1]

  - We need currentNode, previousNode

  1.) define two variables prev and head = null
  2.) loop while there exists a current node
  3.) next = head.next
  4.) head.next = prev
  5.) prev = head;
  6.) head = next
  7.) return prev

 */

const reverseList = function (head) {
  let prev = null;
  let next = null;
  while(head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};


/*
  --------------------------------- Column Title ------------------------------
  Given a string columnTitle that represents the column title as appear
  in an Excel sheet, return its corresponding column number.

  Input: columnTitle = "A"
  Output: 1

  Input: columnTitle = "AB"
  Output: 28

  Input: columnTitle = "ZY"
  Output: 701

  ** => Math.pow

  1.) Accumulator sum
  2.) loop through the columnTitle
  3.) find what position the current character is at to determine 26 ^ posn
      ['AB'], A is in posn 0, length - 1 - 0 = 1
  4.) sum += characterCode - 64 * 26 ^ length - 1 - posn)

  Time Complexity: O(n)
  Space Complexity: O(1)

 */

const titleToNumber = function (columnTitle) {
  let sum = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    const exp = columnTitle.length - 1 - i;
    sum += (columnTitle[i].charCodeAt(0) - 64) * (26 ** exp);
  }
  return sum;

};

console.log('---------------title to number-------------');
console.log(titleToNumber('AB'));
console.log(titleToNumber('ZY'));

/*
  ------------------------ Majority Element --------------------------
  Given an array nums of size n, return the majority element.
  The majority element is the element that appears more than [n / 2] times.
  You may assume that the majority element always exists in the array.

  Input: nums = [3,2,3]
  Output: 3

  1.) Use a map to push all the value
  2.) Loop through map and return the value more than n/2 times

  Time Complexity: O(n)
  Space Complexity: O(n)

 */

const majorityElement = function (nums) {

  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] > (nums.length / 2)) {
      return nums[i];
    }
  }

};

const arrayD = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(arrayD));

const arrayE = [3, 2, 3];
console.log(majorityElement(arrayE));

/*
  ------------------------- Roman Numeral to Integer -------------------------
  Given a string of Roman Numerals, output the value of the values.

  Input: s = "III"
  Output: 3

  1.) Create a dictionary with the values
  2.) Change string to array and reverse the array
  3.) Keep track of sum and level
  4.) Check if we should add or subtract from the sum

  Time Complexity: O(n)
  Space Complexity: O(n)

 */


let romanToInt = function (s) {
  const dictionary =
      {'I': 1, 'V' : 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};

  const reverseS = s.split("").reverse();
  let level = 0;
  let sum = 0;

  reverseS.forEach(item => {
    const newLevel = dictionary[item];
    if (newLevel >= level) {
      sum += newLevel;
      level = newLevel;
    } else {
      sum -= newLevel;
    }
  });
  return sum;
}

console.log('----------- roman to int ------------');
console.log(romanToInt('I'));
console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('V'));
console.log(romanToInt('VI'));
console.log(romanToInt('IX'));
console.log(romanToInt('MCD'));


/*
  ------------------------ Delete Node in Linked List -------------------------
  Write a function to delete a node in a singly-linked list.
  You will not be given access to the head of the list,
  instead you will be given access to the node to be deleted directly.

  It is guaranteed that the node to be deleted is not a tail node in the list.

  Approach: Loop through the values changing the value of the given node to
  the node.next.value and updating all node children with their children's
  information as well

 */

const deleteNode = function (node) {

  node.val = node.next.val;
  node.next = node.next.next;

};

/*
  ----------------------- Max Profits Part II ------------------------------
  You are given an integer array prices where prices[i] is the price of a given
  stock on the ith day. On each day, you may decide to buy and/or sell the
  stock. You can only hold at most one share of the stock at any time.
  However, you can buy it then immediately sell it on the same day.

  Find and return the maximum profit you can achieve.
 */

let maxProfit = function (array) {
  let sum =0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      sum += array[i] > array[i - 1];
    }
  }
  return sum;
};

/*
  ----------------------------- Valid Anagram -----------------------------
  Return true if string t is a valid anagram of string s


 */

let isAnagram = function(s, t) {
  let sCache = {};
  let tCache = {};

  let sArray = s.split("");
  let tArray = t.split("");

  if (sArray.length !== tArray.length) {
    return false;
  }

  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] in sCache) {
      sCache[sArray[i]] += 1;
    } else {
      sCache[sArray[i]] = 1;
    }
  }

  for (let i = 0; i < tArray.length; i++) {
    if (tArray[i] in tCache) {
      tCache[tArray[i]] += 1;
    } else {
      tCache[tArray[i]] = 1;
    }
  }

  console.log(sCache);
  console.log(tCache);
  for (let i = 0; i < sArray.length; i++) {
    if (sCache[sArray[i]] !== tCache[sArray[i]]) {
      return false;
    }
  }
  return true;


};

console.log(isAnagram("rat", "car"));

/*
  -------------------- First Non Repeating Character -----------------------
  Given a string s, find the first non-repeating character in it and
  return its index. If it does not exist, return -1.
 */

const firstUniqChar = function(s) {

  let map = {};
  let sArray = [...s];

  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] in map) {
      map[sArray[i]] += 1;
    } else {
      map[sArray[i]] = 1;
    }
  }

  for (let i = 0; i < sArray.length; i++) {
    if (map[sArray[i]] === 1) {
      return i;
    }
  }

  return -1;

};

/*
  --------------------- Sorted Array -> Binary Tree ------------------------
  convert a sorted array into a binary tree


 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {
  let length = nums.length;
  return length ? t(0, length - 1) : null;
  function t(a,b) {
    let node = new TreeNode();
    let mid = Math.ceil( (b + a) / 2 );

    node.val = nums[mid];
    node.left = a === mid ? null : t(a, mid - 1);
    node.right = b === mid ? null : t(mid + 1, b);

    return node;
  };
};


/*
  --------------------- Missing Number ----------------------
  Given an array nums containing n distinct numbers in the range [0, n],
  return the only number in the range that is missing from the array.
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {

  let expectedSum = (nums.length * (nums.length + 1) / 2);
  let actualSum = 0;

  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
  }
  return expectedSum - actualSum;
};

console.log('--------------missing number ---------------');
console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));

/*
  -------------------- Array Intersection ---------------------------
  Return a list of the values arrayA and arrayB share

 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
  let map = {}, result = []

  for(let idx of nums1) {
    if(!map[idx]) {
      map[idx] = 1
    } else {
      map[idx]++
    }
  }

  for(let idx of nums2) {
    if(map[idx] > 0) {
      result.push(idx)
      map[idx]--
    }
  }
  return result
};

console.log(intersect([1, 2, 2, 3, 3],[2, 2, 3, 4, 5]));


/*
  ----------------------- Merge Two Sorted Linked Lists ------------------------
  Merge two sorted linked lists and return it as a sorted list.
  The list should be made by splicing together the nodes of the first two lists.

  Input: l1 = [1,2,4], l2 = [1,3,4]
  Output: [1,1,2,3,4,4]

 */

const mergeTwoLists = function(l1, l2) {

  let h = new ListNode();
  let c = h;

  while (l1 && l2) {
    if (l2.val < l1.val) [l2, l1] = [l1, l2];
    c.next = l1;
    c = c.next
    l1 = l1.next;
  }

  if (l1) c.next = l1;
  if (l2) c.next = l2;

  return h.next;
};






