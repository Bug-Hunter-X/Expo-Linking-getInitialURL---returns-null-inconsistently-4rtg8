# Expo Linking.getInitialURL() Returns Null Inconsistent Issue

This repository demonstrates a bug in Expo's `Linking` API where `getInitialURL()` sometimes returns `null` despite a deep link being opened. This is a hard-to-reproduce, intermittent issue with no clear error messages. The solution provides a workaround to mitigate this problem.

## Bug Reproduction

The `bug.js` file shows how `Linking.getInitialURL()` is used.  In some instances, it may return null despite launching the app via a deep link.

## Solution

The `bugSolution.js` file shows a more reliable approach, employing a combination of `addEventListener` for URL changes and `getInitialURL` for the initial launch. This approach increases the chances of catching the deep link even when the `getInitialURL()` returns null immediately after launch.