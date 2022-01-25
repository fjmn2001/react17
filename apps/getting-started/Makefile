current-dir := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))

.PHONY: deps
deps: CMD=install

.PHONY: npm
npm deps:
	@docker-compose exec react17-getting-started npm $(CMD)

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
