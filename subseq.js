function numDistinct(s, t) {
    const m = s.length;
    const n = t.length;

    // Initialize a 2D array dp with dimensions (m+1) x (n+1)
    const dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1);
        for (let j = 0; j <= n; j++) {
            dp[i][j] = 0;
        }
    }

    // An empty string t is a subsequence of any string s
    for (let i = 0; i <= m; i++) {
        dp[i][0] = 1;
    }

    // Fill the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s.charAt(i - 1) === t.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[m][n];
}

// Example usage:
const s = "rabbbit";
const t = "rabbit";
console.log(numDistinct(s, t));  // Output: 3
