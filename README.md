flexwarm.com-2018
=============

天物新材料英文官网2018年版


域名绑定、301转向及nginx配置
-----

新建配置文件: ``sudo nano /etc/nginx/sites-available/flexwarm.com``

编辑配置文件及保存: 

    server {
      listen 443 ssl;
      server_name flexwarm.com;
      ssl_certificate flexwarm.crt;
      ssl_certificate_key flexwarm.key;
      index index.html;
      root /srv/flexwarm.com-2018/_site;
      error_page 404 /Error.html;
      ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
      ssl_ciphers HIGH:!aNULL:!MD5:!DH;
    }
    server {
        listen 80;
        server_name flexwarm.com;
        return 301 https://flexwarm.com$request_uri;
    }

建立链接: ``sudo ln -s /etc/nginx/sites-available/flexwarm.com /etc/nginx/sites-enabled/``

重启nginx: ``sudo service nginx restart``


下载及生成网站
-----

1. 下载网站源码: ``git clone git://github.com/zackwong/flexwarm.com-2018.git``

2. 进入源码根目录: ``cd flexwarm.com-2018``

3. 生成网站: ``jekyll build``


开发者
---------

* Zack Wong &lt;hzzzoo@126.com&gt;
