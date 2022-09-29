FROM python:3.9.13

LABEL maintainer="chj2171@gmail.com"



#RUN apt-get update -y
#RUN apt-get install -y python-pip python-dev build-essential

RUN pip install --upgrade pip
RUN pip install django

WORKDIR /usr/src/app

COPY . .

WORKDIR ./donghang
#manage.py를 실행할 수 있는 디렉토리로 이동합니다.

#    & pip install -r requirements.txt

CMD ["python3", "manage.py", "runserver", "0.0.0.0:8080"]

#이동한 디렉토리에서 django를 가동시켜주는 코드를 작성합니다. 여기서 port는 8000로 실행시키겠습니다.
EXPOSE 8080

#django 서버의 포트를 8000로 지정하였으므로 Docker의 컨테이너 또한 8000 포트를 열어줍니