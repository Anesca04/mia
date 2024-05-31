#================================
#== GOLANG ENVIRONMENT
#================================
GO := go
GIN := gin
DOCKER := docker
ifndef tag
	tag=duelana-v1
endif

goinstall:
	cd server && ${GO} get .

gorun:
	cd server && air

godev:
	cd server && ${GO} run main.go

godoc:
	cd server && swag init

goprod:
	cd server && ${GO} build -o main .

gotest:
	cd server/test && ${GO} test -v

goformat:
	cd server && ${GO} fmt ./...

localbuild:
	${DOCKER} build -t $(tag) \
	--build-arg MASTER_WALLET_PUBLIC_KEY=EEMxfcPwMK615YLbEhq8NVacdmxjkxkok6KXBJBHuZfB \
	--build-arg API_URL=host.docker.internal:8080 \
	--build-arg FRONT_END_ENV=development .

localrun:
	${DOCKER} run -dp 8080:8080 --env-file .env.docker --name ${tag} ${tag}

prodbuild:
	${DOCKER} build -t takahiro1209/$(tag) \
	--build-arg MASTER_WALLET_PUBLIC_KEY=EEMxfcPwMK615YLbEhq8NVacdmxjkxkok6KXBJBHuZfB \
	--build-arg API_URL=test.duelana.com \
	--build-arg FRONT_END_ENV=production .