'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("OK! Test PASSED.");
    } else {
      console.error("Test FAILED. Try again!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
  }



/**
 * @param {number} num - 確認したい数字
 * @returns {boolean} 与えられた数字が素数かどうか
 */

//1回目のコード//
function isPrime(num) {
    let flag=0; // 0:素数 1:素数ではない
    let i =0;
    if(num === 1) {
      flag = 1;
    } else if (num >=2) {
      for (i = 2; i < num; i++) {
          if(num % i === 0){
            flag = 1;
          } else {
            flag = 0;
          }
      }
    }
  
    if (flag === 0) {
      return true;
    } else if (flag === 1) {
      return false;
    }
  }

/**
 * @param {number} num - 確認したい数字
 * @returns {boolean} 与えられた数字が素数かどうか
 */


//最終コード//
function isPrime_final(num) {
    let flag=0; // 0:素数 1:素数ではない
    let i =0;
    if(num === 1) {
      flag = 1;
    } else if (num >=2) {
      for (i = 2; i < num; i++) {
          if(num % i === 0){
            flag = 1;
            break;
          } else {
            flag = 0;
          }
      }
    }
  
    if (flag === 0) {
      return true;
    } else if (flag === 1) {
      return false;
    }
  }




//ここからはwebサイトの説明用の処理//

/**
 *  アドバイスをコンソールに表示する
 */

function getAdviceFromHeaven() {
 console.log("コンピュータは賢くないけど速い。そして飽きない。");
}

/**
 *  ひらめきをコンソールに表示する
 */
function picoon() {
    console.log("flag=1になったらそれ以降のループは不要では。。。");
}
