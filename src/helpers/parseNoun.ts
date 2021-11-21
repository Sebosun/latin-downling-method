export default function parseNouns(data: JSON) {
  const stringifiedJson = JSON.stringify(data);
  const parsed = JSON.parse(stringifiedJson);
  let arr = [];
  for (let item in parsed.nouns.first) {
    arr.push(item);
  }

  const copied = [];
  for (let i = 0; i < arr.length; i++) {
    copied.push({
      [arr[i]]: parsed.nouns.first[arr[i]],
    });
  }
  console.log(copied);
}
