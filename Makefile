NAME = ft_transcendase
USER = $(shell whoami)
VOLUMES = $(shell docker volume ls --filter name='^(frontend_volume|db_volume|backend_volume)$') CONTAINER = $(shell docker ps -q)

COMPOSE = docker-compose -f srcs/docker-compose.yml -p $(NAME)

all: up

up: build
		$(COMPOSE) up -d

build: volumes check-docker
		$(COMPOSE) build

volumes:
		mkdir -p ./data/backend-data
		mkdir -p ./data/frontend-data

check-docker:
		@docker info > /dev/null 2>&1 || (echo "Docker daemon is not running"; exit 1)

create: build
		$(COMPOSE) create

show_volumes:
		$(VOLUMES)

start:
		$(COMPOSE) start

restart:
		$(COMPOSE) restart

ps:
		$(COMPOSE) ps

images:
		$(COMPOSE) images

exec:
		if [ -z "$(CONTAINER)" ]; then \
			echo "There are no containers running"; \
		else \
			docker exec -it $(CONTAINER) /bin/bash; \
		fi

stop:
		$(COMPOSE) stop

down:
		$(COMPOSE) down --rmi all --volumes
		rm -rf ./data

logs:
		$(COMPOSE) logs

re: fclean all

.PHONY: all re up down build create ps exec start restart stop fclean images show_volumes check-docker
