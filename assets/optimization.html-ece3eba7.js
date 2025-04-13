import{_ as t,p as i,q as l,R as n,t as a,a1 as e}from"./framework-96b046e1.js";const o={},c=e('<h1 id="项目优化" tabindex="-1"><a class="header-anchor" href="#项目优化" aria-hidden="true">#</a> 项目优化</h1><h2 id="性能平台搭建" tabindex="-1"><a class="header-anchor" href="#性能平台搭建" aria-hidden="true">#</a> 性能平台搭建</h2><h3 id="影响性能的关键要素" tabindex="-1"><a class="header-anchor" href="#影响性能的关键要素" aria-hidden="true">#</a> 影响性能的关键要素</h3><ul><li>产品设计</li><li>基础网络</li><li>代码质量跟架构</li><li>移动端环境</li><li>硬件及云服务</li></ul><h3 id="压力测试" tabindex="-1"><a class="header-anchor" href="#压力测试" aria-hidden="true">#</a> 压力测试</h3>',5),p=["src"],r=n("h3",{id:"压力测试指标",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#压力测试指标","aria-hidden":"true"},"#"),a(" 压力测试指标")],-1),u=["src"],d=["src"],m=n("h3",{id:"jmeter",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jmeter","aria-hidden":"true"},"#"),a(" Jmeter")],-1),v=["src"],b=["src"],h=n("h3",{id:"jmeter常用插件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jmeter常用插件","aria-hidden":"true"},"#"),a(" Jmeter常用插件")],-1),g=n("p",null,"开启插件下载：",-1),k=n("br",null,null,-1),x=["src"],f=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、PerfMon：监控服务器硬件，如CPU，内存，硬盘读写速度等
Allows collecting target server resource metrics
2、Basic Graphs：主要显示平均响应时间，活动线程数，成功/失败交易数等
Average Response Time 平均响应时间
Active Threads 活动线程数
Successful/Failed Transactions 成功/失败 事务数
3、Additional Graphs：主要显示吞吐量，连接时间，每秒的点击数等
Response Codes
Bytes Throughput
Connect Times
Latency
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_=["src"],y=e('<h3 id="性能关键指标" tabindex="-1"><a class="header-anchor" href="#性能关键指标" aria-hidden="true">#</a> 性能关键指标</h3><ul><li><p>1.响应时间</p></li><li><p>2.压力机活动线程数</p><p>压力机活动线程数表明压测过程中施加的压力的情况</p></li><li><p>3.TPS每秒事务数 数字愈大，代表性能越好</p></li><li><p>4.QPS每秒查询数<br> 数字愈大，代表性能越好(1tps&gt;=1QPS)</p></li><li><p>5.吞吐量 吞吐量： 每秒的请求数量</p></li></ul><h3 id="服务器硬件资源监控" tabindex="-1"><a class="header-anchor" href="#服务器硬件资源监控" aria-hidden="true">#</a> 服务器硬件资源监控</h3><p>压测的时候，我们需要实时了解服务器【CPU、内存、网络、服务器Load】的状态如何，哪如何监控服 务器的资源占用情况呢？方法有很多种：</p><ul><li>使用操作系统命令：top、vmstat、iostat、iotop、dstat、sar...</li><li>使用finalshell</li><li>使用JMeter压测工具perfmon</li><li>使用Grafana+Prometheus+node_exporter</li></ul><h3 id="系统负载-load-average" tabindex="-1"><a class="header-anchor" href="#系统负载-load-average" aria-hidden="true">#</a> 系统负载:load average</h3><p>Load Average含义</p><p>系统负载System Load是系统CPU繁忙程度的度量，即有多少进程在等待被CPU调度（进程等待队 列的长度）。<br> 平均负载（Load Average）是一段时间内系统的平均负载，这个一段时间一般取1分钟、5分钟、 15分钟。<br> 多核CPU和单核CPU的系统负载数据指标的理解还不一样。<br> top 指令可以查看系统负载</p><h3 id="单核cpu三种load情况" tabindex="-1"><a class="header-anchor" href="#单核cpu三种load情况" aria-hidden="true">#</a> 单核CPU三种Load情况</h3><p>举例说明：把CPU比喻成一条（单核）马路，进程任务比喻成马路上跑着的汽车，Load则表示马 路的繁忙程度。 情况1-Load小于1：不堵车，汽车在马路上跑得游刃有余</p><p>情况2-Load等于1：马路已无额外的资源跑更多的汽车了</p><p>情况3-Load大于1：汽车都堵着等待进入马路</p><h3 id="搭建压测监控平台" tabindex="-1"><a class="header-anchor" href="#搭建压测监控平台" aria-hidden="true">#</a> 搭建压测监控平台</h3>',13),w=["src"],T=e(`<p>node_exporter:类似一一种代理工具，将机器压力信息数据push到Prometheus<br> Prometheus:是一个开源的系统监控和报警系统<br> InfluxDB:是一个开源的、高性能的时序型数据库</p><p>安装Docker+JMeter+InfluxDB+Grafana+node_exporter+Prometheus</p><ul><li>配置Docker环境<br> yum 包更新到最新</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum update -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装需要的软件包， yum-util 提供yum-config-manager功能，另外两个是devicemapper驱动依赖 的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum install -y yum-utils device-mapper-persistent-data lvm2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置yum源为阿里云<br> 配置yum源的代理，类似于maven镜像仓库，加速下载软件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装docker</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum install docker-ce -y
# 启动
systemctl start docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装后查看docker版本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ocker -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>安装InfluxDB<br> 下载InfluxDB的镜像：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull influxdb:1.8   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动InfluxDB的容器，并将端口 8083 和 8086 映射出来：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d --name influxdb -p 8086:8086 -p 8083:8083 influxdb:1.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入容器内部，创建名为jmeter的数据库：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it influxdb /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输入 influx 命令，即可进入 influx 操作界面<br> 输入 create database jmeter 命令，创建名为 jmeter 的数据库<br> 输入 show databases 命令，查看数据库创建成功</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>root@517f57017d99:/# influx
Connected to http://localhost:8086 version 1.7.10
InfluxDB shell version: 1.7.10
&gt; create database jmeter
&gt; show databases
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用JMeter 库， select 查看数据，这个时候是没有数据的：<br> 输入 use jmeter 命令，应用刚才创建的数据库<br> 输入 select * from jmeter 命令，查询库中有哪些数据</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>&gt; use jmeter
&gt; select * from jmeter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>设置JMeter脚本后置监听器<br> 配置后置监听器<br> 想要将 JMeter的测试数据导入 InfluxDB ，就需要在 JMeter中使用 Backend Listener 配置</li></ul>`,23),I=["src"],P=n("p",null,"主要配置说明",-1),B=["src"],S=n("br",null,null,-1),C=n("br",null,null,-1),O=["src"],N=e(`<ul><li>安装Grafana<br> 下载Grafana镜像：</li></ul><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>docker pull grafana/grafana
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动Grafana容器：</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>docker run -d --name grafana -p 3000:3000 grafana/grafana
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>验证部署成功<br> 网页端访问http://101.200.146.199:3000验证部署成功 默认账号密码admin/admin</p>`,5),j=n("br",null,null,-1),L=["src"],$=n("br",null,null,-1),J=["src"],M=n("br",null,null,-1),D=["src"],A=n("br",null,null,-1),R=n("br",null,null,-1),U=n("br",null,null,-1),G=["src"],W=n("p",null,"模板导入分别有以下3种方式： 直接输入模板id号 直接上传模板json文件 直接输入模板json内容",-1),z=["src"],H=n("p",null,[a("找展示模板"),n("br"),a(" 在Grafana的官网找到我们需要的展示模板"),n("br"),a(" Apache JMeter Dashboard dashboad-ID：5496"),n("br"),a(" JMeter Dashboard(3.2 and up) dashboad-ID：3351")],-1),Q=n("br",null,null,-1),q=n("br",null,null,-1),E=["src"],F=n("br",null,null,-1),V=n("br",null,null,-1),K=["src"],X=e(`<p>注意： 如果我们修改过表名，也就是在jmeter的Backend Listener的measurement配置(默认为 jmeter)，这个时候就需要去设置中进行修改，我这里使用的就是默认的，所以无需修改</p><p>以上这些我们就可以查看压测的响应时间，活动线程数等</p><ul><li>安装node_exporter</li></ul><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code># 下载
wget -c
https://github.com/prometheus/node_exporter/releases/download/v0.18.1/node_ex
porter-0.18.1.linux-amd64.tar.gz
# 解压
mkdir /usr/local/hero/
tar zxvf node_exporter-0.18.1.linux-amd64.tar.gz -C /usr/local/hero/
# 启动
cd /usr/local/hero/node_exporter-0.18.1.linux-amd64
nohup ./node_exporter &gt; node.log 2&gt;&amp;1 &amp;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：在被监控服务器中配置开启端口9100 http://101.200.87.86:9100/metrics</p><ul><li>安装Prometheus</li></ul><p>下载解压运行</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code># 下载
wget -c
https://github.com/prometheus/prometheus/releases/download/v2.15.1/prometheus
-2.15.1.linux-amd64.tar.gz
# 解压
tar zxvf prometheus-2.15.1.linux-amd64.tar.gz -C /usr/local/hero/
cd /usr/local/hero/prometheus-2.15.1.linux-amd64
# 运行
nohup ./prometheus &gt; prometheus.log 2&gt;&amp;1 &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置prometheus<br> 在prometheus.yml中加入如下配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- job_name: &#39;hero-Linux&#39;
static_configs:
- targets:
[&#39;172.17.187.78:9100&#39;,&#39;172.17.187.79:9100&#39;,&#39;172.17.187.81:9100&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试Prometheus<br> 测试Prometheus是否安装配置成功 http://101.200.146.199:9090/targets</p>`,11),Y=["src"],Z=n("ul",null,[n("li",null,"在Grafana中配置Prometheus的数据源")],-1),nn=["src"],an=n("p",null,[a("Grafana导入Linux展示模板"),n("br"),a(" 导入Linux系统dashboard"),n("br"),a(" Node Exporter for Prometheus Dashboard EN 20201010"),n("br"),a(" dashboard-ID: 11074"),n("br"),a(" Node Exporter Dashboard"),n("br"),a(" dashboard-ID: 16098")],-1),sn=["src"],en=["src"],tn=n("h3",{id:"梯度压测-分析接口性能瓶颈",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#梯度压测-分析接口性能瓶颈","aria-hidden":"true"},"#"),a(" 梯度压测：分析接口性能瓶颈")],-1),ln=n("p",null,"以上主要的四种性能指标【响应时间、并发用户数、吞吐量、资源使用率】它们之间存在一定的相关 性，共同反映出性能的不同方面。",-1),on=["src"],cn=e(`<p>情况01-模拟低延时场景，用户访问接口并发逐渐增加的过程。<br> 预计接口的响应时间为20ms<br> 线程梯度：5、10、15、20、25、30、35、40个线程<br> 循环请求次数5000次</p><ul><li>网络瓶颈<br> 随着压力的上升，TPS不再增加，接口响应时间逐渐在增加，偶尔出现异常，瓶颈凸显。系统的 负载不高。CPU、内存正常，说明系统这部分资源利用率不高。带宽带宽显然已经触顶了。</li></ul><p>优化方案：<br> 方案01-降低接口响应数据包大小<br> 方案02-提升带宽【或者在内网压测】</p><p>结论：<br> 在低延时场景下，服务瓶颈主要在服务器带宽。<br> TPS数量等于服务端线程数 乘以 (1000ms/ RT均值)<br> RT=21ms，TPS=800，服务端线程数：= 800/ (1000ms/ RT均值) = 17</p><p>情况02-模拟高延时场景，用户访问接口并发逐渐增加的过程。接口的响应时间为500ms<br> 线程梯度：100、200、300、400、500、600、700、800个线程;<br> 循环请求次数200次</p><p>结论：<br> 在高延时场景下，服务瓶颈主要在容器最大并发线程数。<br> RT=500ms，TPS=800，服务端线程数：= 800/ (1000ms/ RT) = 400<br> Tomcat默认的最大的线程数？200<br> 观察服务容器最大线程数，发现处理能力瓶颈卡在容器端</p><p>TPS在上升到一定的值之后，异常率较高 (原因容器使用的IO是是阻塞式IO模型)</p><h2 id="项目优化-1" tabindex="-1"><a class="header-anchor" href="#项目优化-1" aria-hidden="true">#</a> 项目优化</h2><h3 id="tomcat调优" tabindex="-1"><a class="header-anchor" href="#tomcat调优" aria-hidden="true">#</a> Tomcat调优</h3><p>Springboot开发的服务使用嵌入式的Tomcat服务器，那么Tomcat配置使用的是默认配置，我们需要对 Tomcat配置进行适当的优化，让Tomcat性能大幅提升。<br> 我们可以改变yml文件改变内置tomcat配置</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Tomcat的maxConnections、maxThreads、acceptCount三大配置，分别表示最大连接数，最大</span>
线程数、最大的等待数，可以通过application.yml配置文件来改变这个三个值，一个标准的示例如
下：
<span class="token key atrule">server.tomcat.uri-encoding</span><span class="token punctuation">:</span> UTF<span class="token punctuation">-</span><span class="token number">8</span>
<span class="token key atrule">server.tomcat.accept-count</span><span class="token punctuation">:</span> <span class="token number">1000</span> <span class="token comment"># 等待队列最多允许1000个请求在队列中等待</span>
<span class="token key atrule">server.tomcat.max-connections</span><span class="token punctuation">:</span> <span class="token number">20000</span> <span class="token comment"># 最大允许20000个链接被建立</span>
<span class="token comment">## 最大工作线程数，默认200, 4核8g内存，线程数经验值800</span>
<span class="token key atrule">server.tomcat.threads.max</span><span class="token punctuation">:</span> <span class="token number">1600</span> <span class="token comment"># 并发处理创建的最大的线程数量</span>
<span class="token key atrule">server.tomcat.threads.min-spare</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># 最大空闲连接数，防止突发流量</span>
<span class="token comment"># 暴露所有的监控点</span>
<span class="token key atrule">management.endpoints.web.exposure.include</span><span class="token punctuation">:</span> <span class="token string">&#39;*&#39;</span>
<span class="token comment"># 定义Actuator访问路径</span>
<span class="token key atrule">management.endpoints.web.base-path</span><span class="token punctuation">:</span> /actuator
<span class="token comment"># 开启endpoint 关闭服务功能</span>
<span class="token key atrule">management.endpoint.shutdown.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>maxThreads：最大线程数<br> 每一次HTTP请求到达Web服务，Tomcat都会创建一个线程来处理该请求。<br> 最大线程数决定了Web服务容器可以同时处理多少个请求，默认值是200。</li></ul><p>个人经验:<br> 1C2G，线程数200<br> 4C8G，线程数800</p><ul><li><p>accept-count：最大等待连接数<br> 当调用HTTP请求数达到Tomcat的最大线程数时，还有新的请求进来，这时Tomcat会将该剩余请 求放到等待队列中<br> 默认值是100，如果等待队列超了，新的请求会被拒绝（connection refused）</p></li><li><p>Max Connections：最大连接数</p></li></ul><p>最大连接数是指在同一时间内，Tomcat能够接受的最大连接数。如果设置为-1，则表示不限制</p><p>默认值： 对BIO模式，默认值是Max Threads；如果使用定制的Executor执行器，哪默认值将是执行器 中Max Threads的值。<br> 对NIO模式，Max Connections 默认值是10000</p><ul><li>IO模型</li></ul><p>众所周知文件读写性能是影响应用程序性能的关键因素之一。NIO与原来的IO有同样的作用和目的，但 是使用的方式完全不同，NIO支持面向缓冲区的、基于通道的IO操作。NIO以更加高效的方式进行文件 的读写操作。<br> Java的NIO【new io】是从Java 1.4版本开始引入的一套新的IO API用于替代标准的Java IO API。 JDK1.7之后，Java对NIO再次进行了极大的改进，增强了对文件处理和文件系统特性的支持。我们称之 为AIO，也可以叫NIO2。</p><p>优化：使用NIO2的Http协议实现，对请求连接器进行改写。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TomcatConfig</span> <span class="token punctuation">{</span>
<span class="token comment">//自定义SpringBoot嵌入式Tomcat</span>
<span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">TomcatServletWebServerFactory</span> <span class="token function">servletContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token class-name">TomcatServletWebServerFactory</span> tomcat <span class="token operator">=</span> <span class="token keyword">new</span>
<span class="token class-name">TomcatServletWebServerFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
tomcat<span class="token punctuation">.</span><span class="token function">addAdditionalTomcatConnectors</span><span class="token punctuation">(</span><span class="token function">http11Nio2Connector</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> tomcat<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//配置连接器nio2</span>
<span class="token keyword">public</span> <span class="token class-name">Connector</span> <span class="token function">http11Nio2Connector</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token class-name">Connector</span> connector<span class="token operator">=</span><span class="token keyword">new</span>
<span class="token class-name">Connector</span><span class="token punctuation">(</span><span class="token string">&quot;org.apache.coyote.http11.Http11Nio2Protocol&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Http11Nio2Protocol</span> nio2Protocol <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Http11Nio2Protocol</span><span class="token punctuation">)</span>
connector<span class="token punctuation">.</span><span class="token function">getProtocolHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//等待队列最多允许1000个线程在队列中等待</span>
nio2Protocol<span class="token punctuation">.</span><span class="token function">setAcceptCount</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 设置最大线程数</span>
nio2Protocol<span class="token punctuation">.</span><span class="token function">setMaxThreads</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 设置最大连接数</span>
nio2Protocol<span class="token punctuation">.</span><span class="token function">setMaxConnections</span><span class="token punctuation">(</span><span class="token number">20000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//定制化keepalivetimeout,设置30秒内没有请求则服务端自动断开keepalive链接</span>
nio2Protocol<span class="token punctuation">.</span><span class="token function">setKeepAliveTimeout</span><span class="token punctuation">(</span><span class="token number">30000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//当客户端发送超过10000个请求则自动断开keepalive链接</span>
nio2Protocol<span class="token punctuation">.</span><span class="token function">setMaxKeepAliveRequests</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 请求方式</span>
connector<span class="token punctuation">.</span><span class="token function">setScheme</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
connector<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token number">9003</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//自定义的端口，与源端口9001</span>
可以共用，知识改了连接器而已
connector<span class="token punctuation">.</span><span class="token function">setRedirectPort</span><span class="token punctuation">(</span><span class="token number">8443</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> connector<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结论：可以发现服务响应时间大幅缩短，并且稳定</p><p>小结：将NIO升级为AIO之后，RT的毛刺大幅降低，异常数（超时3s）几乎为0。</p><h3 id="容器优化tomcat升级undertow" tabindex="-1"><a class="header-anchor" href="#容器优化tomcat升级undertow" aria-hidden="true">#</a> 容器优化Tomcat升级Undertow</h3><p>Undertow是一个用Java编写的灵活的高性能Web服务器，提供基于NIO的阻塞和非阻塞API。</p><ul><li>支持Http协议</li><li>支持Http2协议</li><li>支持Web Socket</li><li>最高支持到Servlet4.0</li><li>支持嵌入式</li></ul><p>SpringBoot的web环境中默认使用Tomcat作为内置服务器，其实SpringBoot提供了另外2种内置的服务 器供我们选择，我们可以很方便的进行切换。</p><ul><li>Undertow红帽公司开发的一款基于 NIO 的高性能 Web 嵌入式服务器 。轻量级Servlet服务器， 比Tomcat更轻量级没有可视化操作界面，没有其他的类似jsp的功能，只专注于服务器部署，因此 undertow服务器性能略好于Tomcat服务器；</li><li>Jetty开源的Servlet容器，它是Java的web容器。为JSP和servlet提供运行环境。Jetty也是使用Java 语言编写的。</li></ul><p>配置操作过程：</p><ol><li>在spring-boot-starter-web排除tomcat</li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-tomcat<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>导入其他容器的starter</li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--导入undertow容器依赖--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-undertow<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>配置</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 设置IO线程数, 它主要执行非阻塞的任务,它们会负责多个连接</span>
<span class="token key atrule">server.undertow.threads.io</span><span class="token punctuation">:</span> <span class="token number">800</span>
<span class="token comment"># 阻塞任务线程池, 当执行类似servlet请求阻塞IO操作, undertow会从这个线程池中取得线</span>
程
<span class="token comment"># 默认值是IO线程数*8</span>
<span class="token key atrule">server.undertow.threads.worker</span><span class="token punctuation">:</span> <span class="token number">8000</span>
<span class="token comment"># 以下的配置会影响buffer,这些buffer会用于服务器连接的IO操作,有点类似netty的池化内</span>
存管理
<span class="token comment"># 每块buffer的空间大小越小，空间就被利用的越充分，不要设置太大，以免影响其他应用，合</span>
适即可
<span class="token key atrule">server.undertow.buffer-size</span><span class="token punctuation">:</span> <span class="token number">1024</span>
<span class="token comment"># 每个区分配的buffer数量 , 所以pool的大小是buffer-size * buffers-per-region</span>
<span class="token comment"># 是否分配的直接内存(NIO直接分配的堆外内存)</span>
<span class="token key atrule">server.undertow.direct-buffers</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>小结：<br> 更换了服务容器之后，RT更加平稳，TPS的增长趋势更平稳，异常数（超时3s）几乎为0。<br> 在低延时情况下，接口通吐量不及Tomcat。<br> 稳定压倒一切，如果只是写json接口，且对接口响应稳定性要求高，可以选用Undertow</p><h3 id="数据库调优" tabindex="-1"><a class="header-anchor" href="#数据库调优" aria-hidden="true">#</a> 数据库调优</h3><p>影响数据库性能:</p><ul><li>服务器： OS、CPU、Memory、Network</li><li>MySQL ：<br> 数据库表结构【对性能影响最大】<br> 低下效率的SQL语句<br> 超大的表<br> 大事务<br> 数据库配置<br> 数据库整体架构</li></ul><p>数据库调优途径:</p><ul><li>优化SQL语句调：根据需求创建结构良好的SQL语句【实现同一个需求，SQL语句写法很多】</li><li>数据库表结构调优：索引，主键，外键，多表关系等等</li><li>MySQL配置调优：最大连接数，连接超时，线程缓存，查询缓存，排序缓存，连接查询缓存等等</li><li>服务器硬件优化：多核CPU、更大内存</li></ul><h3 id="openresty调优" tabindex="-1"><a class="header-anchor" href="#openresty调优" aria-hidden="true">#</a> OpenResty调优</h3><p>OpenResty是一个基于 Nginx 与 Lua 的高性能 Web 平台，其内部集成了大量精良的 Lua 库、第三方 模块以及大多数的依赖项。用于方便地搭建能够处理超高并发、扩展性极高的动态 Web 应用、Web 服 务和动态网关。OpenResty的目标是让你的Web服务直接跑在 Nginx 服务内部，充分利用 Nginx 的非阻 塞 I/O 模型，不仅仅对 HTTP 客户端请求,甚至于对远程后端诸如 MySQL、PostgreSQL、Memcached 以及 Redis 等都进行一致的高性能响应。</p><p>小结：使用了OpenResty反向代理了服务，TPS会在原有的基础上再翻倍！</p><h3 id="缓存调优" tabindex="-1"><a class="header-anchor" href="#缓存调优" aria-hidden="true">#</a> 缓存调优</h3>`,44),pn=["src"],rn=e('<p>缓存预热</p><h3 id="jvm调优" tabindex="-1"><a class="header-anchor" href="#jvm调优" aria-hidden="true">#</a> JVM调优</h3><h2 id="项目重构" tabindex="-1"><a class="header-anchor" href="#项目重构" aria-hidden="true">#</a> 项目重构</h2><h3 id="重构原因" tabindex="-1"><a class="header-anchor" href="#重构原因" aria-hidden="true">#</a> 重构原因</h3><ul><li>代码排版风格不一致，函数、变量命名随意，错别字，拼音命令都有出现。</li><li>存在不少废弃代码（代码被注释，或者代码没有被使用）</li><li>包结构混乱，导致开发经常重复实现已有的功能</li><li>过滤器滥用并且没有设置优先级</li><li>日志打印千奇百怪，不注意控制日志级别</li><li>参数校验满天飞，一个函数中关于桉树校验的逻辑可能有许多行</li><li>错误码泛滥，散落在各个文件，工具类也泛滥</li><li>函数方法不封装，封装不合理</li><li>接口文档和代码不一致，接口文档无法及时刷新</li></ul><h3 id="重构的要求" tabindex="-1"><a class="header-anchor" href="#重构的要求" aria-hidden="true">#</a> 重构的要求</h3><p>重构可达可小，小到一个变量名和函数名的改动这类微重构，大到重写整个接口业务逻辑的系统性重构<br> 对于微重构，可以做在平时，穿插在问题修改，需求开发过程中<br> 需要制定完整的详细计划<br> 熟悉代码结构，业务场景<br> 确定重构范围<br> 确认参与人员</p><h3 id="重构步骤" tabindex="-1"><a class="header-anchor" href="#重构步骤" aria-hidden="true">#</a> 重构步骤</h3><ul><li>第一阶段：利用工具批量修复问题</li><li>第二阶段：删除冗余代码</li><li>第三阶段：深入到代码进行重构</li><li>第四阶段：测试验证</li><li>第五阶段：代码检视</li></ul>',9);function un(s,dn){return i(),l("div",null,[c,n("img",{src:s.$withBase("/images/youhua/1.png"),alt:"压力测试"},null,8,p),r,n("img",{src:s.$withBase("/images/youhua/2.png"),alt:"压力测试"},null,8,u),n("img",{src:s.$withBase("/images/youhua/3.png"),alt:"压力测试"},null,8,d),m,n("img",{src:s.$withBase("/images/youhua/4.png"),alt:"压力测试"},null,8,v),n("img",{src:s.$withBase("/images/youhua/5.png"),alt:"压力测试"},null,8,b),h,g,n("ul",null,[n("li",null,[a("下载地址：http://jmeter-plugins.org/downloads/all/，官网上下载plugins-manager.jar直接在线下载, 然后执行在线下载即可。"),k,n("img",{src:s.$withBase("/images/youhua/6.png"),alt:"压力测试"},null,8,x)])]),f,n("img",{src:s.$withBase("/images/youhua/7.png"),alt:"压力测试"},null,8,_),y,n("img",{src:s.$withBase("/images/youhua/8.png"),alt:"压力测试"},null,8,w),T,n("img",{src:s.$withBase("/images/youhua/9.png"),alt:"压力测试"},null,8,I),P,n("img",{src:s.$withBase("/images/youhua/10.png"),alt:"压力测试"},null,8,B),n("p",null,[a("运行验证"),S,a(" 运行 Jmeter 脚本，然后再次在 influxdb 中查看数据，发现类似下面的数据说明输入导入成功："),C,n("img",{src:s.$withBase("/images/youhua/11.png"),alt:"压力测试"},null,8,O)]),N,n("p",null,[a("选择添加数据源"),j,n("img",{src:s.$withBase("/images/youhua/12.png"),alt:"压力测试"},null,8,L)]),n("p",null,[a("找到并选择 influxdb"),$,n("img",{src:s.$withBase("/images/youhua/13.png"),alt:"压力测试"},null,8,J)]),n("p",null,[a("配置数据源"),M,n("img",{src:s.$withBase("/images/youhua/14.png"),alt:"压力测试"},null,8,D),A,a(" 数据源创建成功时会有绿色的提示"),R,a(" 导入模板"),U,n("img",{src:s.$withBase("/images/youhua/15.png"),alt:"压力测试"},null,8,G)]),W,n("img",{src:s.$withBase("/images/youhua/16.png"),alt:"压力测试"},null,8,z),H,n("p",null,[a("导入找到的模板，使用模板id"),Q,a(" 导入模板，我这里选择输入模板id号，导入后如下，配置好模板名称和对应的数据源，然后 import 即可"),q,n("img",{src:s.$withBase("/images/youhua/17.png"),alt:"压力测试"},null,8,E)]),n("p",null,[a("查看效果"),F,a(" 展示设置，首先选择创建的application"),V,n("img",{src:s.$withBase("/images/youhua/18.png"),alt:"压力测试"},null,8,K)]),X,n("img",{src:s.$withBase("/images/youhua/19.png"),alt:"压力测试"},null,8,Y),Z,n("img",{src:s.$withBase("/images/youhua/20.png"),alt:"压力测试"},null,8,nn),an,n("img",{src:s.$withBase("/images/youhua/21.png"),alt:"压力测试"},null,8,sn),n("img",{src:s.$withBase("/images/youhua/22.png"),alt:"压力测试"},null,8,en),tn,ln,n("img",{src:s.$withBase("/images/youhua/23.png"),alt:"压力测试"},null,8,on),cn,n("img",{src:s.$withBase("/images/youhua/24.png"),alt:"压力测试"},null,8,pn),rn])}const vn=t(o,[["render",un],["__file","optimization.html.vue"]]);export{vn as default};
