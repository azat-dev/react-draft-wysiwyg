// The function will return block inline styles using block level meta-data
export default function blockStyleFn(block: Object): string {
  const blockAlignment = block.getData() && block.getData().get('text-align');
  if (blockAlignment) {
    return `rdw-${blockAlignment}-aligned-block`;
  }

  const type = block.getType();
  if (type === 'structured-text') {
    return 'structured-text';
  }

  if (type === 'foldable') {
    return 'foldable';
  }

  if (type === 'examples') {
    return 'examples';
  }
  return '';
}
