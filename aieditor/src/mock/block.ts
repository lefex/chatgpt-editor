import Delta from 'quill-delta';

export function getBlockDelta() {
  const delta = new Delta();
  delta.insert('射雕英雄传');
  delta.insert('\n', {
    header: 1,
  });
  delta.insert('来自AI世界\n', {
    link: 'https://magickpen.com',
  });
  delta.insert(
    '在一个充满未来科技的世界里，射雕英雄传的故事发生在一个遥远的星系中，主角是一位年轻的太空探险家，他的名字叫做李飞。',
  );
  delta.insert('\n');
  delta.insert(
    '李飞是一个有着强烈探险欲望的年轻人，他在一次偶然的机会中，发现了一个未知的星球，并带着他的团队前往探索。他们在星球上遇到了一群神秘的外星人，他们告诉李飞，这个星球上有一种神奇的能量，可以让人拥有超凡的力量。',
  );
  delta.insert('\n');
  delta.insert(
    '李飞被这种神奇的能量所吸引，他开始研究这种能量，并带着他的团队一步步探索整个星球。在这个过程中，他们遇到了许多危险和挑战，但李飞和他的团队始终坚定不移地向前，最终找到了能量的来源。',
  );
  delta.insert('\n');
  delta.insert(
    '然而，他们的探险之旅并没有结束，因为这个星球上还隐藏着一个更加神秘的秘密。他们发现，这个星球上的能量是一种可以控制人类思想的力量。这个发现让李飞和他的团队感到震惊和不安，他们开始思考人类未来的发展方向。',
  );
  delta.insert('\n');
  delta.insert(
    '在接下来的冒险中，李飞和他的团队不断地面对各种挑战和危险，他们必须在时间和空间的双重维度中寻找答案，以保护人类的未来。在这个过程中，他们发现，这个星球上的能量是一种可以控制人类思想的力量，这种力量可以带来巨大的权力和财富，但也可以带来无尽的灾难和危险。',
  );
  delta.insert('\n');
  delta.insert(
    '在最终的决战中，李飞和他的团队终于找到了真相，并且成功地阻止了外星人的阴谋。然而，他们也发现了一个更加深刻的道理，那就是人类必须要在科技进步和人类价值之间做出选择。在这个选择中，他们选择了科技进步，但是他们也意识到，人类需要寻找一种平衡，以保证人类的未来。',
  );
  return delta;
}
