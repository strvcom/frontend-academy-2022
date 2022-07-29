const config = {
  repo: {
    slug: process.env.VERCEL_GIT_REPO_SLUG,
    owner: process.env.VERCEL_GIT_REPO_OWNER,
  },
  commit: process.env.VERCEL_GIT_COMMIT_SHA,
}

const prefix = process.env.VERCEL
  ? `https://github.com/${config.repo.owner}/${config.repo.slug}/tree/${config.commit}/`
  : `file://${process.cwd()}/`

/**
 * Pallete:
 *
 * #AAA9A9
 * #3FA4D8
 * #34BEB8
 * #B2C125
 * #FECC2F
 * #F9A227
 * #F5631F
 * #DB3838
 * #EF647A
 * #A363D9
 */
const colors = Object.entries({
  '^src/pages': '#A363D9',
  '^src/features/api': '#3FA4D8',
  '^src/features/auth': '#34BEB8',
  '^src/features/core': '#B2C125',
  '^src/features/events': '#FECC2F',
  '^src/features/login': '#F9A227',
  '^src/features/ui': '#F5631F',
  '^src': '#AAA9A9',
})

/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  options: {
    /* conditions specifying which files not to follow further when encountered:
       - path: a regular expression to match
       - dependencyTypes: see https://github.com/sverweij/dependency-cruiser/blob/master/doc/rules-reference.md#dependencytypes-and-dependencytypesnot
       for a complete list
    */
    doNotFollow: {
      path: 'node_modules',
    },

    /* conditions specifying which dependencies to exclude
       - path: a regular expression to match
       - dynamic: a boolean indicating whether to ignore dynamic (true) or static (false) dependencies.
          leave out if you want to exclude neither (recommended!)
    */
    exclude: {
      path: '(\\.stories\\.)|(\\.test\\.)',
      // dynamic: true
    },

    /* pattern specifying which files to include (regular expression)
       dependency-cruiser will skip everything not matching this pattern
    */
    includeOnly: '^src',

    /* dependency-cruiser will include modules matching against the focus
       regular expression in its output, as well as their neighbours (direct
       dependencies and dependents)
    */
    // focus : '',

    /* list of module systems to cruise */
    // moduleSystems: ['amd', 'cjs', 'es6', 'tsd'],

    /* prefix for links in html and svg output (e.g. 'https://github.com/you/yourrepo/blob/develop/'
       to open it on your online repo or `vscode://file/${process.cwd()}/` to 
       open it in visual studio code),
     */
    prefix: prefix,

    /* false (the default): ignore dependencies that only exist before typescript-to-javascript compilation
       true: also detect dependencies that only exist before typescript-to-javascript compilation
       "specify": for each dependency identify whether it only exists before compilation or also after
     */
    // tsPreCompilationDeps: true,

    /* list of extensions (typically non-parseable) to scan. Empty by default. */
    // extraExtensionsToScan: [".json", ".jpg", ".png", ".svg", ".webp"],

    /* if true combines the package.jsons found from the module up to the base
       folder the cruise is initiated from. Useful for how (some) mono-repos
       manage dependencies & dependency definitions.
     */
    // combinedDependencies: false,

    /* if true leave symlinks untouched, otherwise use the realpath */
    // preserveSymlinks: false,

    /* TypeScript project file ('tsconfig.json') to use for
       (1) compilation and
       (2) resolution (e.g. with the paths property)

       The (optional) fileName attribute specifies which file to take (relative to
       dependency-cruiser's current working directory). When not provided
       defaults to './tsconfig.json'.
     */
    tsConfig: {
      fileName: 'tsconfig.json',
    },

    /* Webpack configuration to use to get resolve options from.

       The (optional) fileName attribute specifies which file to take (relative
       to dependency-cruiser's current working directory. When not provided defaults
       to './webpack.conf.js'.

       The (optional) `env` and `args` attributes contain the parameters to be passed if
       your webpack config is a function and takes them (see webpack documentation
       for details)
     */
    // webpackConfig: {
    //  fileName: './webpack.config.js',
    //  env: {},
    //  args: {},
    // },

    /* Babel config ('.babelrc', '.babelrc.json', '.babelrc.json5', ...) to use
      for compilation (and whatever other naughty things babel plugins do to
      source code). This feature is well tested and usable, but might change
      behavior a bit over time (e.g. more precise results for used module 
      systems) without dependency-cruiser getting a major version bump.
     */
    // babelConfig: {
    //   fileName: './.babelrc'
    // },

    /* List of strings you have in use in addition to cjs/ es6 requires
       & imports to declare module dependencies. Use this e.g. if you've
       redeclared require, use a require-wrapper or use window.require as
       a hack.
    */
    // exoticRequireStrings: [],
    /* options to pass on to enhanced-resolve, the package dependency-cruiser
       uses to resolve module references to disk. You can set most of these
       options in a webpack.conf.js - this section is here for those
       projects that don't have a separate webpack config file.

       Note: settings in webpack.conf.js override the ones specified here.
     */
    enhancedResolveOptions: {
      /* List of strings to consider as 'exports' fields in package.json. Use
         ['exports'] when you use packages that use such a field and your environment
         supports it (e.g. node ^12.19 || >=14.7 or recent versions of webpack).

        If you have an `exportsFields` attribute in your webpack config, that one
         will have precedence over the one specified here.
      */
      exportsFields: ['exports'],
      /* List of conditions to check for in the exports field. e.g. use ['imports']
         if you're only interested in exposed es6 modules, ['require'] for commonjs,
         or all conditions at once `(['import', 'require', 'node', 'default']`)
         if anything goes for you. Only works when the 'exportsFields' array is
         non-empty.

        If you have a 'conditionNames' attribute in your webpack config, that one will
        have precedence over the one specified here.
      */
      conditionNames: ['import', 'require', 'node', 'default'],
    },
    reporterOptions: {
      dot: {
        /* pattern of modules that can be consolidated in the detailed
           graphical dependency graph. The default pattern in this configuration
           collapses everything in node_modules to one folder deep so you see
           the external modules, but not the innards your app depends upon.
         */
        collapsePattern: ['^src/(.+)/parts'],

        /* Options to tweak the appearance of your graph.See
           https://github.com/sverweij/dependency-cruiser/blob/master/doc/options-reference.md#reporteroptions
           for details and some examples. If you don't specify a theme
           don't worry - dependency-cruiser will fall back to the default one.
        */
        theme: {
          graph: {
            splines: 'ortho',
            rankdir: 'TB',
          },

          modules: [
            {
              criteria: { source: 'index\\.tsx?' },
              attributes: { fontsize: 12 },
            },

            // Color files inside each module.
            ...colors.map(([source, fillcolor]) => ({
              criteria: { source },
              attributes: { fillcolor: `${fillcolor}77` },
            })),
          ],

          // Color edges connecting to files inside modules.
          dependencies: colors.map(([resolved, color]) => ({
            criteria: { resolved },
            attributes: { color: `${color}55` },
          })),
        },
      },
      // archi: {
      //   /* pattern of modules that can be consolidated in the high level
      //     graphical dependency graph. If you use the high level graphical
      //     dependency graph reporter (`archi`) you probably want to tweak
      //     this collapsePattern to your situation.
      //   */
      //   collapsePattern:
      //     '^(packages|src|lib|app|bin|test(s?)|spec(s?))/[^/]+|node_modules/[^/]+',

      //   /* Options to tweak the appearance of your graph.See
      //      https://github.com/sverweij/dependency-cruiser/blob/master/doc/options-reference.md#reporteroptions
      //      for details and some examples. If you don't specify a theme
      //      for 'archi' dependency-cruiser will use the one specified in the
      //      dot section (see above), if any, and otherwise use the default one.
      //    */
      //   // theme: {
      //   // },
      // },
    },
  },
}
// generated: dependency-cruiser@11.11.0 on 2022-07-12T15:12:47.034Z
