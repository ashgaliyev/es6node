import greeter from './greeter'

export default (args) => args.map(name => greeter(name))
