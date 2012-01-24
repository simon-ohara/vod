---
---

$(document).ready( function() {
  var lrgCanvas = document.getElementById("lrg");
  var smlCanvas = document.getElementById("sml");
  draw_lrg_shape(lrgCanvas.getContext("2d"));
  draw_sml_shape(smlCanvas.getContext("2d"));
});

function draw_lrg_shape(ctx) {

  // shapes/Group
  ctx.save();

  // shapes/Group/Path
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(260.2, 192.6);
  ctx.bezierCurveTo(257.9, 195.1, 256.6, 199.6, 256.7, 204.7);
  ctx.bezierCurveTo(256.8, 210.8, 258.8, 217.1, 262.1, 222.0);
  ctx.bezierCurveTo(265.2, 226.6, 271.0, 232.1, 281.2, 233.7);
  ctx.bezierCurveTo(292.1, 235.4, 303.6, 233.5, 317.2, 226.7);
  ctx.bezierCurveTo(330.0, 220.4, 343.5, 210.5, 357.1, 196.3);
  ctx.bezierCurveTo(367.9, 185.0, 379.7, 171.7, 390.5, 155.6);
  ctx.bezierCurveTo(410.8, 125.2, 420.7, 102.9, 420.8, 102.7);
  ctx.lineTo(420.8, 102.7);
  ctx.lineTo(420.8, 102.7);
  ctx.bezierCurveTo(436.8, 57.8, 460.2, 30.9, 490.6, 22.9);
  ctx.bezierCurveTo(542.5, 9.1, 598.0, 55.9, 598.0, 55.9);
  ctx.bezierCurveTo(597.8, 55.8, 584.0, 44.0, 564.0, 34.0);
  ctx.bezierCurveTo(552.2, 28.2, 540.6, 24.1, 529.5, 21.9);
  ctx.bezierCurveTo(515.6, 19.2, 502.5, 19.4, 490.5, 22.6);
  ctx.bezierCurveTo(460.1, 30.7, 436.5, 57.6, 420.5, 102.5);
  ctx.bezierCurveTo(419.9, 103.7, 379.2, 190.6, 316.2, 224.6);
  ctx.bezierCurveTo(281.7, 243.0, 267.1, 228.8, 262.3, 221.9);
  ctx.bezierCurveTo(255.2, 211.3, 255.6, 196.7, 261.1, 192.1);
  ctx.lineTo(261.1, 191.9);
  ctx.fillStyle = "rgb(0, 127, 101)";
  ctx.fill();

  // shapes/Group/Path
  ctx.beginPath();
  ctx.moveTo(581.8, 41.0);
  ctx.bezierCurveTo(571.3, 32.3, 556.3, 21.6, 537.9, 13.4);
  ctx.bezierCurveTo(501.2, -3.2, 451.0, -9.9, 397.1, 29.3);
  ctx.bezierCurveTo(366.2, 51.7, 334.1, 89.2, 302.6, 148.7);
  ctx.bezierCurveTo(293.5, 165.9, 283.8, 177.3, 273.2, 185.0);
  ctx.bezierCurveTo(236.3, 211.8, 190.0, 191.7, 130.9, 204.2);
  ctx.bezierCurveTo(119.2, 206.7, 108.8, 211.6, 99.5, 218.3);
  ctx.bezierCurveTo(51.3, 253.3, 31.6, 340.3, 5.0, 424.7);
  ctx.lineTo(4.7, 424.6);
  ctx.bezierCurveTo(31.3, 340.2, 51.0, 253.2, 99.3, 218.1);
  ctx.bezierCurveTo(108.6, 211.3, 119.1, 206.4, 130.8, 204.0);
  ctx.bezierCurveTo(190.1, 191.4, 236.3, 211.5, 273.0, 184.8);
  ctx.bezierCurveTo(283.5, 177.1, 293.3, 165.7, 302.4, 148.6);
  ctx.bezierCurveTo(333.8, 89.1, 366.0, 51.5, 396.9, 29.0);
  ctx.bezierCurveTo(450.9, -10.2, 501.2, -3.5, 538.1, 13.1);
  ctx.bezierCurveTo(574.9, 29.7, 598.2, 56.0, 598.2, 56.0);
  ctx.lineTo(598.0, 56.2);
  ctx.bezierCurveTo(598.0, 56.2, 592.2, 49.6, 581.8, 41.0);
  ctx.fillStyle = "rgb(191, 221, 166)";
  ctx.fill();

  // shapes/Group/Path
  ctx.beginPath();
  ctx.moveTo(598.3, 55.9);
  ctx.bezierCurveTo(598.2, 55.8, 586.9, 46.8, 569.6, 39.3);
  ctx.bezierCurveTo(559.4, 34.8, 549.2, 31.7, 539.2, 30.0);
  ctx.bezierCurveTo(526.6, 27.9, 514.4, 28.1, 502.8, 30.4);
  ctx.bezierCurveTo(470.1, 37.1, 442.3, 61.5, 420.3, 102.7);
  ctx.bezierCurveTo(404.5, 132.4, 389.3, 148.2, 373.9, 151.3);
  ctx.bezierCurveTo(357.3, 154.6, 342.6, 142.5, 328.4, 130.8);
  ctx.bezierCurveTo(311.7, 117.1, 296.0, 104.1, 278.5, 117.1);
  ctx.bezierCurveTo(268.7, 124.5, 263.1, 134.9, 260.9, 149.9);
  ctx.bezierCurveTo(259.1, 163.3, 260.1, 178.7, 261.3, 195.0);
  ctx.bezierCurveTo(263.6, 227.7, 266.2, 264.7, 244.8, 295.3);
  ctx.bezierCurveTo(226.7, 321.2, 186.1, 330.4, 143.1, 340.2);
  ctx.bezierCurveTo(114.2, 346.8, 84.3, 353.7, 59.2, 366.0);
  ctx.bezierCurveTo(45.6, 372.6, 34.7, 380.2, 25.9, 389.2);
  ctx.bezierCurveTo(16.1, 399.2, 9.0, 411.1, 4.6, 424.6);
  ctx.lineTo(5.1, 424.7);
  ctx.bezierCurveTo(9.5, 411.2, 16.5, 399.7, 26.3, 389.6);
  ctx.bezierCurveTo(35.1, 380.7, 45.9, 373.1, 59.4, 366.5);
  ctx.bezierCurveTo(84.5, 354.2, 114.3, 347.4, 143.2, 340.8);
  ctx.bezierCurveTo(186.3, 330.9, 231.4, 323.9, 249.6, 297.9);
  ctx.bezierCurveTo(271.1, 267.2, 264.1, 227.7, 261.8, 195.0);
  ctx.bezierCurveTo(259.5, 162.0, 257.5, 133.5, 278.8, 117.6);
  ctx.bezierCurveTo(296.0, 104.8, 311.5, 117.6, 328.0, 131.2);
  ctx.bezierCurveTo(342.3, 143.0, 357.1, 155.2, 374.1, 151.8);
  ctx.bezierCurveTo(389.6, 148.7, 404.9, 132.8, 420.8, 103.0);
  ctx.bezierCurveTo(442.7, 61.9, 470.3, 37.7, 502.9, 31.0);
  ctx.bezierCurveTo(552.9, 20.7, 597.5, 56.0, 598.0, 56.3);
  ctx.lineTo(598.3, 55.9);
  ctx.closePath();
  ctx.fillStyle = "rgb(111, 0, 81)";
  ctx.fill();

  // shapes/Group/Path
  ctx.beginPath();
  ctx.moveTo(320.8, 283.7);
  ctx.bezierCurveTo(236.7, 337.7, 180.0, 235.4, 148.0, 216.5);
  ctx.bezierCurveTo(132.6, 207.5, 118.9, 209.3, 106.2, 218.5);
  ctx.bezierCurveTo(64.0, 249.2, 34.6, 362.0, 4.9, 424.7);
  ctx.lineTo(4.7, 424.6);
  ctx.bezierCurveTo(34.3, 361.9, 63.7, 249.1, 106.1, 218.3);
  ctx.bezierCurveTo(118.8, 209.1, 132.7, 207.3, 148.1, 216.3);
  ctx.bezierCurveTo(180.2, 235.4, 236.8, 337.4, 320.7, 283.5);
  ctx.bezierCurveTo(322.7, 282.2, 324.7, 280.8, 326.7, 279.4);
  ctx.bezierCurveTo(368.9, 248.7, 393.2, 193.1, 408.4, 157.6);
  ctx.bezierCurveTo(410.4, 153.0, 412.5, 149.1, 413.8, 145.7);
  ctx.bezierCurveTo(427.4, 111.9, 446.0, 89.4, 466.1, 74.8);
  ctx.bezierCurveTo(525.3, 31.8, 597.8, 56.3, 597.8, 56.3);
  ctx.lineTo(597.8, 56.5);
  ctx.bezierCurveTo(597.8, 56.5, 593.2, 55.0, 585.5, 53.4);
  ctx.bezierCurveTo(577.8, 51.8, 566.9, 50.1, 554.2, 49.7);
  ctx.bezierCurveTo(528.6, 48.9, 495.8, 53.6, 466.3, 75.0);
  ctx.bezierCurveTo(446.2, 89.6, 427.6, 112.0, 414.0, 145.8);
  ctx.bezierCurveTo(412.7, 149.2, 410.6, 153.1, 408.6, 157.7);
  ctx.bezierCurveTo(393.4, 193.2, 369.1, 248.9, 326.9, 279.6);
  ctx.bezierCurveTo(324.9, 281.0, 322.8, 282.4, 320.8, 283.7);
  ctx.fillStyle = "rgb(204, 82, 156)";
  ctx.fill();

  // shapes/Group/Compound Path
  ctx.beginPath();

  // shapes/Group/Compound Path/Path
  ctx.moveTo(228.0, 300.7);
  ctx.bezierCurveTo(179.2, 302.0, 129.5, 318.1, 89.9, 343.2);
  ctx.bezierCurveTo(84.1, 346.9, 78.6, 350.6, 73.5, 354.4);
  ctx.bezierCurveTo(37.5, 380.5, 16.9, 407.1, 8.8, 418.8);
  ctx.bezierCurveTo(6.1, 422.6, 4.8, 424.9, 4.8, 424.9);
  ctx.lineTo(4.6, 424.7);
  ctx.bezierCurveTo(4.6, 424.7, 25.3, 389.0, 73.3, 354.1);
  ctx.bezierCurveTo(78.5, 350.4, 84.0, 346.6, 89.8, 342.9);
  ctx.bezierCurveTo(129.4, 317.8, 179.2, 301.7, 228.0, 300.4);
  ctx.bezierCurveTo(263.2, 299.5, 305.9, 307.3, 343.5, 279.9);
  ctx.bezierCurveTo(351.5, 274.1, 359.2, 266.8, 366.6, 257.5);
  ctx.bezierCurveTo(408.1, 205.3, 438.4, 132.0, 489.2, 95.1);
  ctx.bezierCurveTo(490.3, 94.3, 491.5, 93.5, 492.7, 92.7);
  ctx.bezierCurveTo(532.6, 65.5, 573.0, 61.4, 598.1, 58.6);
  ctx.lineTo(598.1, 58.9);
  ctx.bezierCurveTo(573.1, 61.7, 532.7, 65.8, 492.8, 92.9);
  ctx.bezierCurveTo(491.7, 93.7, 490.5, 94.5, 489.4, 95.4);
  ctx.bezierCurveTo(438.7, 132.2, 408.4, 205.4, 366.8, 257.7);
  ctx.bezierCurveTo(359.4, 267.0, 351.7, 274.3, 343.7, 280.1);
  ctx.bezierCurveTo(305.9, 307.6, 263.1, 299.8, 228.0, 300.7);

  // shapes/Group/Compound Path/Path
  ctx.moveTo(4.8, 424.9);
  ctx.fillStyle = "rgb(111, 0, 81)";
  ctx.fill();

  // shapes/Group/Path
  ctx.beginPath();
  ctx.moveTo(0.0, 419.3);
  ctx.lineTo(0.2, 419.5);
  ctx.bezierCurveTo(0.5, 419.2, 23.5, 386.4, 36.3, 306.5);
  ctx.lineTo(36.0, 306.5);
  ctx.bezierCurveTo(23.2, 386.3, 0.2, 419.0, 0.0, 419.3);
  ctx.fillStyle = "rgb(204, 82, 156)";
  ctx.fill();

  // shapes/Group/Path
  ctx.beginPath();
  ctx.moveTo(261.1, 191.9);
  ctx.lineTo(261.1, 191.8);
  ctx.bezierCurveTo(260.8, 192.0, 234.5, 208.6, 153.7, 187.0);
  ctx.bezierCurveTo(138.8, 183.0, 126.1, 181.5, 114.8, 182.2);
  ctx.bezierCurveTo(103.7, 182.9, 94.2, 185.9, 85.9, 191.2);
  ctx.bezierCurveTo(78.7, 195.8, 72.6, 202.1, 67.0, 210.4);
  ctx.bezierCurveTo(61.7, 218.2, 57.0, 227.8, 52.7, 239.6);
  ctx.bezierCurveTo(46.7, 256.3, 41.5, 277.0, 36.0, 306.5);
  ctx.bezierCurveTo(35.6, 308.8, 35.3, 311.1, 34.9, 313.4);
  ctx.bezierCurveTo(34.6, 315.1, 34.3, 316.8, 33.9, 318.5);
  ctx.bezierCurveTo(33.4, 321.4, 32.8, 324.4, 32.3, 327.5);
  ctx.lineTo(32.5, 327.5);
  ctx.bezierCurveTo(32.5, 327.3, 32.6, 327.1, 32.6, 326.9);
  ctx.bezierCurveTo(33.8, 319.8, 35.1, 313.0, 36.3, 306.5);
  ctx.bezierCurveTo(47.3, 247.1, 59.4, 211.8, 85.2, 195.2);
  ctx.bezierCurveTo(93.5, 189.8, 101.9, 186.8, 113.0, 186.1);
  ctx.bezierCurveTo(124.2, 185.3, 137.7, 186.7, 152.5, 190.7);
  ctx.bezierCurveTo(175.6, 196.9, 192.2, 198.6, 203.6, 199.8);
  ctx.bezierCurveTo(208.7, 200.3, 213.8, 200.2, 218.7, 199.9);
  ctx.lineTo(218.7, 199.9);
  ctx.bezierCurveTo(218.7, 199.9, 223.8, 199.9, 230.6, 199.3);
  ctx.bezierCurveTo(236.7, 198.8, 244.2, 197.8, 250.2, 196.0);
  ctx.bezierCurveTo(255.6, 194.8, 258.7, 193.4, 260.2, 192.6);
  ctx.fill();
  ctx.restore();
  ctx.restore();
}

function draw_sml_shape(ctx) {

  // shapes/Group
  ctx.save();

  // shapes/Group/Path
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(160.2, 118.6);
  ctx.bezierCurveTo(158.8, 120.1, 158.0, 122.9, 158.0, 126.0);
  ctx.bezierCurveTo(158.1, 129.8, 159.3, 133.7, 161.4, 136.7);
  ctx.bezierCurveTo(163.3, 139.5, 166.9, 142.9, 173.1, 143.9);
  ctx.bezierCurveTo(179.8, 144.9, 186.9, 143.8, 195.3, 139.6);
  ctx.bezierCurveTo(203.2, 135.7, 211.5, 129.6, 219.8, 120.9);
  ctx.bezierCurveTo(226.5, 113.9, 233.8, 105.7, 240.4, 95.8);
  ctx.bezierCurveTo(252.9, 77.1, 259.0, 63.4, 259.1, 63.2);
  ctx.lineTo(259.1, 63.2);
  ctx.lineTo(259.1, 63.2);
  ctx.bezierCurveTo(268.9, 35.6, 283.3, 19.0, 302.0, 14.1);
  ctx.bezierCurveTo(334.0, 5.6, 368.1, 34.4, 368.1, 34.4);
  ctx.bezierCurveTo(368.1, 34.3, 359.6, 27.1, 347.2, 20.9);
  ctx.bezierCurveTo(340.0, 17.3, 332.8, 14.8, 326.0, 13.5);
  ctx.bezierCurveTo(317.5, 11.8, 309.4, 11.9, 302.0, 13.9);
  ctx.bezierCurveTo(283.2, 18.9, 268.7, 35.4, 258.9, 63.1);
  ctx.bezierCurveTo(258.5, 63.9, 233.4, 117.3, 194.7, 138.3);
  ctx.bezierCurveTo(173.4, 149.6, 164.4, 140.9, 161.5, 136.6);
  ctx.bezierCurveTo(157.1, 130.1, 157.4, 121.1, 160.7, 118.3);
  ctx.lineTo(160.7, 118.2);
  ctx.fillStyle = "rgb(0, 127, 101)";
  ctx.fill();

  // shapes/Group/Path
  ctx.beginPath();
  ctx.moveTo(358.2, 25.2);
  ctx.bezierCurveTo(351.8, 19.9, 342.5, 13.3, 331.2, 8.2);
  ctx.bezierCurveTo(308.5, -1.9, 277.6, -6.1, 244.5, 18.0);
  ctx.bezierCurveTo(225.4, 31.8, 205.7, 54.9, 186.3, 91.5);
  ctx.bezierCurveTo(180.7, 102.1, 174.7, 109.2, 168.2, 113.9);
  ctx.bezierCurveTo(145.5, 130.4, 117.0, 118.0, 80.6, 125.7);
  ctx.bezierCurveTo(73.4, 127.3, 67.0, 130.2, 61.2, 134.4);
  ctx.bezierCurveTo(31.6, 155.9, 19.4, 209.5, 3.1, 261.5);
  ctx.lineTo(2.9, 261.4);
  ctx.bezierCurveTo(19.3, 209.5, 31.4, 155.9, 61.1, 134.3);
  ctx.bezierCurveTo(66.9, 130.1, 73.3, 127.1, 80.5, 125.6);
  ctx.bezierCurveTo(117.0, 117.8, 145.5, 130.2, 168.1, 113.8);
  ctx.bezierCurveTo(174.6, 109.1, 180.6, 102.0, 186.1, 91.5);
  ctx.bezierCurveTo(205.5, 54.8, 225.3, 31.7, 244.4, 17.9);
  ctx.bezierCurveTo(277.6, -6.3, 308.6, -2.1, 331.3, 8.1);
  ctx.bezierCurveTo(353.9, 18.3, 368.3, 34.5, 368.3, 34.5);
  ctx.lineTo(368.2, 34.6);
  ctx.bezierCurveTo(368.2, 34.6, 364.6, 30.6, 358.2, 25.2);
  ctx.fillStyle = "rgb(191, 221, 166)";
  ctx.fill();

  // shapes/Group/Path
  ctx.beginPath();
  ctx.moveTo(368.3, 34.4);
  ctx.bezierCurveTo(368.3, 34.4, 361.3, 28.8, 350.7, 24.2);
  ctx.bezierCurveTo(344.4, 21.4, 338.1, 19.5, 331.9, 18.5);
  ctx.bezierCurveTo(324.2, 17.2, 316.7, 17.3, 309.6, 18.7);
  ctx.bezierCurveTo(289.4, 22.9, 272.3, 37.8, 258.8, 63.2);
  ctx.bezierCurveTo(249.0, 81.5, 239.7, 91.3, 230.2, 93.1);
  ctx.bezierCurveTo(219.9, 95.2, 210.9, 87.7, 202.2, 80.5);
  ctx.bezierCurveTo(191.9, 72.1, 182.2, 64.1, 171.5, 72.1);
  ctx.bezierCurveTo(165.4, 76.6, 162.0, 83.1, 160.7, 92.3);
  ctx.bezierCurveTo(159.5, 100.5, 160.2, 110.0, 160.9, 120.0);
  ctx.bezierCurveTo(162.3, 140.2, 163.9, 163.0, 150.7, 181.8);
  ctx.bezierCurveTo(139.5, 197.7, 114.6, 203.4, 88.1, 209.5);
  ctx.bezierCurveTo(70.3, 213.5, 51.9, 217.7, 36.4, 225.3);
  ctx.bezierCurveTo(28.1, 229.4, 21.4, 234.1, 16.0, 239.6);
  ctx.bezierCurveTo(9.9, 245.8, 5.5, 253.1, 2.8, 261.4);
  ctx.lineTo(3.1, 261.5);
  ctx.bezierCurveTo(5.9, 253.1, 10.1, 246.1, 16.2, 239.9);
  ctx.bezierCurveTo(21.6, 234.4, 28.3, 229.7, 36.6, 225.6);
  ctx.bezierCurveTo(52.0, 218.1, 70.4, 213.9, 88.2, 209.8);
  ctx.bezierCurveTo(114.7, 203.7, 142.4, 199.4, 153.7, 183.4);
  ctx.bezierCurveTo(166.9, 164.5, 162.6, 140.2, 161.2, 120.0);
  ctx.bezierCurveTo(159.8, 99.7, 158.5, 82.2, 171.7, 72.4);
  ctx.bezierCurveTo(182.2, 64.5, 191.8, 72.4, 202.0, 80.8);
  ctx.bezierCurveTo(210.8, 88.1, 219.9, 95.5, 230.3, 93.5);
  ctx.bezierCurveTo(239.9, 91.6, 249.3, 81.7, 259.1, 63.4);
  ctx.bezierCurveTo(272.6, 38.1, 289.6, 23.2, 309.6, 19.1);
  ctx.bezierCurveTo(340.4, 12.8, 367.9, 34.5, 368.1, 34.7);
  ctx.lineTo(368.3, 34.4);
  ctx.closePath();
  ctx.fillStyle = "rgb(111, 0, 81)";
  ctx.fill();

  // shapes/Group/Path
  ctx.beginPath();
  ctx.moveTo(197.5, 174.7);
  ctx.bezierCurveTo(145.7, 207.9, 110.8, 144.9, 91.1, 133.3);
  ctx.bezierCurveTo(81.7, 127.8, 73.2, 128.9, 65.4, 134.5);
  ctx.bezierCurveTo(39.4, 153.4, 21.3, 222.9, 3.0, 261.5);
  ctx.lineTo(2.9, 261.4);
  ctx.bezierCurveTo(21.1, 222.8, 39.2, 153.4, 65.3, 134.4);
  ctx.bezierCurveTo(73.1, 128.7, 81.7, 127.6, 91.2, 133.2);
  ctx.bezierCurveTo(111.0, 144.9, 145.8, 207.7, 197.4, 174.6);
  ctx.bezierCurveTo(198.7, 173.7, 199.9, 172.9, 201.1, 172.0);
  ctx.bezierCurveTo(227.1, 153.1, 242.1, 118.9, 251.5, 97.0);
  ctx.bezierCurveTo(252.7, 94.2, 253.9, 91.8, 254.8, 89.7);
  ctx.bezierCurveTo(263.1, 68.9, 274.6, 55.1, 287.0, 46.1);
  ctx.bezierCurveTo(323.4, 19.6, 368.1, 34.7, 368.1, 34.7);
  ctx.lineTo(368.0, 34.8);
  ctx.bezierCurveTo(368.0, 34.8, 365.2, 33.9, 360.5, 32.9);
  ctx.bezierCurveTo(355.7, 31.9, 349.0, 30.8, 341.2, 30.6);
  ctx.bezierCurveTo(325.5, 30.1, 305.2, 33.0, 287.1, 46.2);
  ctx.bezierCurveTo(274.7, 55.2, 263.3, 69.0, 254.9, 89.8);
  ctx.bezierCurveTo(254.1, 91.9, 252.8, 94.2, 251.6, 97.1);
  ctx.bezierCurveTo(242.2, 118.9, 227.2, 153.2, 201.2, 172.1);
  ctx.bezierCurveTo(200.0, 173.0, 198.8, 173.9, 197.5, 174.7);
  ctx.fillStyle = "rgb(204, 82, 156)";
  ctx.fill();

  // shapes/Group/Compound Path
  ctx.beginPath();

  // shapes/Group/Compound Path/Path
  ctx.moveTo(140.4, 185.1);
  ctx.bezierCurveTo(110.4, 185.9, 79.7, 195.8, 55.4, 211.3);
  ctx.bezierCurveTo(51.8, 213.5, 48.4, 215.9, 45.2, 218.2);
  ctx.bezierCurveTo(23.1, 234.3, 10.4, 250.6, 5.4, 257.8);
  ctx.bezierCurveTo(3.8, 260.2, 3.0, 261.6, 3.0, 261.6);
  ctx.lineTo(2.8, 261.5);
  ctx.bezierCurveTo(2.8, 261.5, 15.6, 239.5, 45.1, 218.0);
  ctx.bezierCurveTo(48.3, 215.7, 51.7, 213.4, 55.3, 211.1);
  ctx.bezierCurveTo(79.7, 195.6, 110.3, 185.7, 140.3, 184.9);
  ctx.bezierCurveTo(162.0, 184.4, 188.3, 189.2, 211.5, 172.3);
  ctx.bezierCurveTo(216.4, 168.8, 221.1, 164.3, 225.7, 158.5);
  ctx.bezierCurveTo(251.2, 126.4, 269.9, 81.3, 301.2, 58.6);
  ctx.bezierCurveTo(301.9, 58.1, 302.6, 57.6, 303.3, 57.1);
  ctx.bezierCurveTo(327.9, 40.3, 352.8, 37.8, 368.2, 36.1);
  ctx.lineTo(368.2, 36.2);
  ctx.bezierCurveTo(352.8, 38.0, 328.0, 40.5, 303.4, 57.2);
  ctx.bezierCurveTo(302.7, 57.7, 302.0, 58.2, 301.3, 58.7);
  ctx.bezierCurveTo(270.1, 81.4, 251.4, 126.4, 225.8, 158.7);
  ctx.bezierCurveTo(221.3, 164.4, 216.5, 168.9, 211.6, 172.4);
  ctx.bezierCurveTo(188.3, 189.4, 162.0, 184.6, 140.4, 185.1);

  // shapes/Group/Compound Path/Path
  ctx.moveTo(3.0, 261.6);
  ctx.fillStyle = "rgb(111, 0, 81)";
  ctx.fill();

  // shapes/Group/Path
  ctx.beginPath();
  ctx.moveTo(0.0, 258.2);
  ctx.lineTo(0.1, 258.3);
  ctx.bezierCurveTo(0.3, 258.1, 14.5, 237.9, 22.3, 188.7);
  ctx.lineTo(22.2, 188.7);
  ctx.bezierCurveTo(14.3, 237.8, 0.1, 258.0, 0.0, 258.2);
  ctx.fillStyle = "rgb(204, 82, 156)";
  ctx.fill();

  // shapes/Group/Path
  ctx.beginPath();
  ctx.moveTo(160.7, 118.2);
  ctx.lineTo(160.7, 118.1);
  ctx.bezierCurveTo(160.6, 118.2, 144.4, 128.4, 94.6, 115.1);
  ctx.bezierCurveTo(85.5, 112.7, 77.6, 111.7, 70.7, 112.2);
  ctx.bezierCurveTo(63.8, 112.6, 58.0, 114.4, 52.9, 117.7);
  ctx.bezierCurveTo(48.5, 120.6, 44.7, 124.4, 41.2, 129.5);
  ctx.bezierCurveTo(38.0, 134.4, 35.1, 140.2, 32.5, 147.5);
  ctx.bezierCurveTo(28.7, 157.8, 25.5, 170.5, 22.2, 188.7);
  ctx.bezierCurveTo(21.9, 190.1, 21.7, 191.5, 21.5, 193.0);
  ctx.bezierCurveTo(21.3, 194.0, 21.1, 195.0, 20.9, 196.1);
  ctx.bezierCurveTo(20.6, 197.9, 20.2, 199.7, 19.9, 201.6);
  ctx.lineTo(20.0, 201.6);
  ctx.bezierCurveTo(20.0, 201.5, 20.1, 201.4, 20.1, 201.3);
  ctx.bezierCurveTo(20.8, 196.9, 21.6, 192.7, 22.3, 188.7);
  ctx.bezierCurveTo(29.1, 152.2, 36.6, 130.4, 52.4, 120.2);
  ctx.bezierCurveTo(57.6, 116.9, 62.8, 115.0, 69.6, 114.6);
  ctx.bezierCurveTo(76.5, 114.1, 84.7, 115.0, 93.9, 117.4);
  ctx.bezierCurveTo(108.1, 121.2, 118.3, 122.2, 125.3, 123.0);
  ctx.bezierCurveTo(128.5, 123.3, 131.6, 123.3, 134.7, 123.1);
  ctx.lineTo(134.6, 123.1);
  ctx.bezierCurveTo(134.6, 123.1, 137.8, 123.1, 142.0, 122.7);
  ctx.bezierCurveTo(145.7, 122.4, 150.3, 121.8, 154.1, 120.7);
  ctx.bezierCurveTo(157.3, 119.9, 159.3, 119.0, 160.2, 118.6);
  ctx.fill();
  ctx.restore();
  ctx.restore();
}