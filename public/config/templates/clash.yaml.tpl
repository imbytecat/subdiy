mixed-port: 7890
allow-lan: true
mode: rule
log-level: info
external-controller: 0.0.0.0:9090
dns:
  enable: true
  listen: 0.0.0.0:53
  ipv6: false
{% if default(request.clash.dns, "") == "china-doh" %}
  default-server:
    - 119.29.29.29
    - 223.5.5.5
  nameserver:
    - https://doh.pub/dns-query
    - https://dns.alidns.com/dns-query
{% else if default(request.clash.dns, "") == "self-doh" %}
  default-server:
    - 119.29.29.29
    - 223.5.5.5
  nameserver:
    - https://agh.lililili.net/1437bb45-7db3-4878-b836-091161dc37d7
{% else if default(request.clash.dns, "") == "google-doh" %}
  default-server:
    - 8.8.8.8
    - 8.8.4.4
  nameserver:
    - https://dns.google/dns-query
{% else if default(request.clash.dns, "") == "cloudflare-doh" %}
  default-server:
    - 1.1.1.1
    - 1.0.0.1
  nameserver:
    - https://cloudflare-dns.com/dns-query
{% else %}
  nameserver:
    - 119.29.29.29
    - 223.5.5.5
{% endif %}
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  fake-ip-filter:
    - +.msftncsi.com
    - +.msftconnecttest.com
    - msftconnecttest.com
    - localhost.ptlogin2.qq.com
{% if default(request.clash.tun, "") == "true" %}
tun:
  enable: true
  stack: system
  dns-hijack:
    - any:53
  auto-route: true
  auto-detect-interface: true
{% endif %}
