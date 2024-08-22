install:
	npm ci

run:
	node bin/brain-games.js

publish:
	npm publish

lint:
	npx eslint . --fix

