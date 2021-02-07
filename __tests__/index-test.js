const babel = require('@babel/core');
const plugin = require('../');

const plugins = ['@babel/plugin-syntax-jsx', plugin];

it('single node', () => {
    const example = `<div style="width:12px"/>`;
    const {code} = babel.transform(example, { plugins });
    expect(code).toMatchSnapshot();
});

it('nested node', () => {
    const example = `<div style="width:12px"><span style="height: 20px"></span></div>`;
    const {code} = babel.transform(example, { plugins });
    expect(code).toMatchSnapshot();
});
