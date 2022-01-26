current-dir := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))

.PHONY: build
build: deps start

.PHONY: deps
deps: npm-install

.PHONY: npm-install
npm-install: CMD=install

.PHONY: npm-test
npm-test: CMD=run test

.PHONY: npm
npm npm-install npm-test:
	@docker run --rm $(INTERACTIVE) --volume $(current-dir):/usr/src/app --user node \
		-w /usr/src/app node:16-alpine npm $(CMD)

# 🐳 Docker Compose
.PHONY: start
start: CMD=up --build -d

.PHONY: stop
stop: CMD=stop

.PHONY: destroy
destroy: CMD=down

.PHONY: doco
doco start stop destroy:
	@docker-compose $(CMD)

.PHONY: login-node
login-node:
	docker-compose exec react17-getting-started sh

.PHONY: logs-node
logs-node:
	docker-compose logs --tail=100 -f react17-getting-started
