/**
 * Warning
 * 
 * file: `/index.module.css` is using `postcss.modules` and `builtins.css.modules` 
 * 	to process css modules at the same time, rspack will use `builtins.css.modules`'s result
 */

import styles from './index.module.css'

function App() {
	return <div className={styles.red}>red text</div>
}

export default App;
