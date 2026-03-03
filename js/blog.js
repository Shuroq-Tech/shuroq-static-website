/**
 * Single Blog Page JavaScript
 * Handles dynamic blog content loading and rendering
 */

// Blog data object - contains all blog posts
const blogs = {
    1: {
        title: "Cloud-Native Product Development",
        author: "Engineering Team",
        role: "Cloud Architects",
        date: "Feb 2026",
        readTime: "5 min read",
        content: `
            <h2>Introduction</h2>
            <p>Cloud-native development enables scalable and resilient systems that can adapt to changing business requirements. In this comprehensive guide, we'll explore the key principles and best practices for building cloud-native applications that deliver exceptional performance and reliability.</p>
            
            <h2>What is Cloud-Native Development?</h2>
            <p>Cloud-native development is an approach to building and running applications to take advantage of the distributed computing offered by the cloud delivery model. This involves using containers, microservices, and continuous delivery to build applications that are resilient, manageable, and observable.</p>
            
            <h2>Key Benefits</h2>
            <ul>
                <li><strong>Scalability:</strong> Automatically scale resources based on demand</li>
                <li><strong>Resilience:</strong> Built-in fault tolerance and self-healing capabilities</li>
                <li><strong>Faster deployments:</strong> Continuous integration and delivery pipelines</li>
                <li><strong>Cost efficiency:</strong> Pay only for resources you consume</li>
                <li><strong>Portability:</strong> Run anywhere - on-premises, cloud, or hybrid</li>
            </ul>
            
            <h2>Core Technologies</h2>
            <p>Modern cloud-native development relies on several key technologies:</p>
            <ul>
                <li><strong>Containers:</strong> Docker and container orchestration with Kubernetes</li>
                <li><strong>Microservices:</strong> Decomposing applications into smaller, independent services</li>
                <li><strong>DevOps:</strong> Automation of build, test, and deployment processes</li>
                <li><strong>Observability:</strong> Monitoring, logging, and tracing capabilities</li>
            </ul>
            
            <h2>Best Practices</h2>
            <p>When implementing cloud-native architectures, consider these best practices:</p>
            <ol>
                <li>Design for failure and implement proper error handling</li>
                <li>Use infrastructure as code (IaC) for reproducible environments</li>
                <li>Implement comprehensive monitoring and alerting</li>
                <li>Adopt a microservices architecture where appropriate</li>
                <li>Implement proper security measures at every layer</li>
            </ol>
            
            <h2>Conclusion</h2>
            <p>Cloud-native development represents a fundamental shift in how we build and deploy applications. By embracing these principles and technologies, organizations can build more resilient, scalable, and efficient systems that meet the demands of modern digital business.</p>
        `
    },
    
    2: {
        title: "From Monolith to Microservices: A Complete Enterprise Transition Guide",
        author: "Platform Engineering Team",
        role: "Backend & Cloud Engineers",
        date: "Feb 2026",
        readTime: "8 min read",
        content: `
            <h2>Understanding the Monolith Challenge</h2>
            <p>For years, monolithic architecture has been the foundation of enterprise software systems. It offers simplicity, faster initial development, and easier deployment pipelines in early stages.</p>
            <p>However, as businesses scale and user demands increase, monolithic systems often become bottlenecks. Teams struggle with slower releases, scalability issues, and increasing system complexity.</p>
            <p>Modern digital products demand speed, flexibility, and resilience — and this is where microservices architecture becomes essential.</p>
            
            <h2>What is a Monolithic Architecture?</h2>
            <p>A monolithic application is built as a single, unified codebase where all modules — UI, business logic, and database interactions — are tightly coupled and deployed together.</p>
            <p><strong>Example:</strong> E-commerce app:</p>
            <ul>
                <li>User authentication</li>
                <li>Product catalog</li>
                <li>Payment system</li>
                <li>All exist in one codebase</li>
            </ul>
            
            <h2>Limitations of Monolithic Systems</h2>
            <p>As the application grows, several issues start to emerge:</p>
            <p>🔴 <strong>1. Scalability Constraints</strong></p>
            <p>Scaling requires duplicating the entire application, even if only one module (e.g., payments) needs scaling.</p>
            
            <p>🔴 <strong>2. Deployment Risk</strong></p>
            <p>A small change requires redeploying the entire system, increasing downtime risk.</p>
            
            <p>🔴 <strong>3. Tight Coupling</strong></p>
            <p>A bug in one module can impact the entire system.</p>
            
            <p>🔴 <strong>4. Slow Development Velocity</strong></p>
            <p>Large teams working on the same codebase cause merge conflicts and delays.</p>
            
            <p>🔴 <strong>5. Technology Lock-in</strong></p>
            <p>Difficult to introduce new technologies without rewriting major parts.</p>
            
            <h2>Introduction to Microservices</h2>
            <p>Microservices architecture breaks the application into small, independent services, each responsible for a specific business capability.</p>
            <p>Each service:</p>
            <ul>
                <li>Has its own codebase</li>
                <li>Can be deployed independently</li>
                <li>Communicates via APIs (REST / gRPC)</li>
            </ul>
            
            <h2>Key Benefits of Microservices</h2>
            <p>✅ <strong>Independent Scalability</strong></p>
            <p>Scale only what is needed (e.g., payment service during peak sales)</p>
            
            <p>✅ <strong>Faster Deployment Cycles</strong></p>
            <p>Deploy services independently without affecting others</p>
            
            <p>✅ <strong>Fault Isolation</strong></p>
            <p>Failure in one service does not crash the entire system</p>
            
            <p>✅ <strong>Technology Flexibility</strong></p>
            <p>Use different tech stacks for different services</p>
            
            <p>✅ <strong>Team Autonomy</strong></p>
            <p>Small teams own services end-to-end</p>
            
            <h2>When Should You Move to Microservices?</h2>
            <p>Microservices are not always the right choice.</p>
            <p>👉 <strong>Consider migration when:</strong></p>
            <ul>
                <li>Your application has grown significantly</li>
                <li>Deployment cycles are slow</li>
                <li>Teams are large and blocked</li>
                <li>You need high scalability and availability</li>
            </ul>
            
            <p>👉 <strong>Avoid if:</strong></p>
            <ul>
                <li>Your product is still in early stage</li>
                <li>Team size is small</li>
                <li>System complexity is manageable</li>
            </ul>
            
            <h2>Migration Strategy (Step-by-Step)</h2>
            <p>A successful transition requires a gradual and controlled approach:</p>
            <ol>
                <li><strong>Identify Service Boundaries</strong><br>
                Break the application based on business domains (e.g., auth, payments)</li>
                
                <li><strong>Apply the Strangler Pattern</strong><br>
                Replace parts of the monolith gradually instead of rewriting everything</li>
                
                <li><strong>Build APIs</strong><br>
                Introduce API layers to enable communication</li>
                
                <li><strong>Extract Services Incrementally</strong><br>
                Move one service at a time</li>
                
                <li><strong>Introduce DevOps Practices</strong><br>
                Implement CI/CD pipelines for independent deployments</li>
                
                <li><strong>Monitor & Optimize</strong><br>
                Use observability tools to track performance</li>
            </ol>
            
            <h2>Tools & Technologies</h2>
            <p>Modern microservices ecosystems rely on:</p>
            <ul>
                <li><strong>Containerization:</strong> Docker</li>
                <li><strong>Orchestration:</strong> Kubernetes</li>
                <li><strong>CI/CD:</strong> Jenkins, GitHub Actions</li>
                <li><strong>API Gateway:</strong> Kong, NGINX</li>
                <li><strong>Service Mesh:</strong> Istio, Linkerd</li>
                <li><strong>Monitoring:</strong> Prometheus, Grafana</li>
            </ul>
            
            <h2>Challenges & Trade-offs</h2>
            <p>Microservices bring power — but also complexity:</p>
            <p>⚠️ <strong>Distributed System Complexity</strong><br>
            More services = harder to manage</p>
            
            <p>⚠️ <strong>Network Latency</strong><br>
            Service-to-service communication adds delays</p>
            
            <p>⚠️ <strong>Data Consistency</strong><br>
            Managing transactions across services is complex</p>
            
            <p>⚠️ <strong>DevOps Overhead</strong><br>
            Requires strong infrastructure and automation</p>
            
            <p>⚠️ <strong>Debugging Difficulty</strong><br>
            Tracing issues across services is harder</p>
            
            <h2>Conclusion</h2>
            <p>Transitioning from monolith to microservices is a strategic decision, not just a technical upgrade.</p>
            <p>Organizations that succeed:</p>
            <ul>
                <li>Start small</li>
                <li>Invest in DevOps and observability</li>
                <li>Build strong engineering culture</li>
            </ul>
            
            <p>Microservices enable businesses to achieve:</p>
            <p>👉 Scalability</p>
            <p>👉 Resilience</p>
            <p>👉 Faster innovation</p>
            <p>But the journey must be planned, phased, and aligned with business goals.</p>
        `
    },
    
    3: {
        title: "Site Reliability Engineering in Practice",
        author: "SRE Team",
        role: "Reliability Engineers",
        date: "Feb 2026",
        readTime: "7 min read",
        content: `
            <h2>What is Site Reliability Engineering?</h2>
            <p>Site Reliability Engineering (SRE) is a discipline that incorporates aspects of software engineering and applies them to infrastructure and operations problems. The goal is to create ultra-reliable and scalable software systems.</p>
            
            <h2>Core SRE Principles</h2>
            <p>SRE is built on several fundamental principles that guide how we approach reliability:</p>
            <ul>
                <li><strong>Service Level Objectives (SLOs):</strong> Define measurable reliability targets</li>
                <li><strong>Error Budgets:</strong> Allow for acceptable downtime within SLOs</li>
                <li><strong>Automation:</strong> Automate repetitive tasks and operations</li>
                <li><strong>Monitoring:</strong> Comprehensive observability of system health</li>
                <li><strong>Incident Response:</strong> Structured approach to handling failures</li>
            </ul>
            
            <h2>Service Level Objectives (SLOs)</h2>
            <p>SLOs are specific, measurable targets for system reliability. They help teams understand what "good enough" looks like and prevent endless optimization. Common SLOs include:</p>
            <ul>
                <li>99.9% uptime (8.76 hours downtime per month)</li>
                <li>99.95% uptime (21.9 minutes downtime per month)</li>
                <li>99.99% uptime (4.38 minutes downtime per month)</li>
            </ul>
            
            <h2>Error Budgets</h2>
            <p>Error budgets represent the amount of acceptable downtime within your SLO. They balance reliability with innovation. When you're within your error budget, you can take risks and innovate. When you exceed it, focus on stability.</p>
            
            <h2>Automation in SRE</h2>
            <p>Automation is crucial for SRE success. Key areas to automate include:</p>
            <ul>
                <li><strong>Deployment automation:</strong> CI/CD pipelines for reliable releases</li>
                <li><strong>Monitoring automation:</strong> Automated alerting and remediation</li>
                <li><strong>Infrastructure as code:</strong> Automated provisioning and configuration</li>
                <li><strong>Incident response:</strong> Automated escalation and communication</li>
            </ul>
            
            <h2>Monitoring and Observability</h2>
            <p>Effective monitoring is the foundation of SRE. Implement the three pillars of observability:</p>
            <ul>
                <li><strong>Metrics:</strong> Quantitative data about system behavior</li>
                <li><strong>Logs:</strong> Detailed event information for debugging</li>
                <li><strong>Traces:</strong> Request flow across distributed systems</li>
            </ul>
            
            <h2>Incident Management</h2>
            <p>When incidents occur, follow a structured approach:</p>
            <ol>
                <li><strong>Detection:</strong> Automated monitoring identifies issues</li>
                <li><strong>Response:</strong> On-call engineers address the incident</li>
                <li><strong>Resolution:</strong> Fix the immediate issue</li>
                <li><strong>Post-mortem:</strong> Learn and prevent future incidents</li>
            </ol>
            
            <h2>Key SRE Practices</h2>
            <p>Implement these practices to improve reliability:</p>
            <ul>
                <li><strong>Chaos Engineering:</strong> Proactively test system resilience</li>
                <li><strong>Capacity Planning:</strong> Plan for future growth and demand</li>
                <li><strong>Disaster Recovery:</strong> Prepare for major outages</li>
                <li><strong>Performance Testing:</strong> Regularly test system limits</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>Site Reliability Engineering transforms how we approach system reliability. By combining engineering practices with operations, SRE enables organizations to build and maintain highly reliable, scalable systems that meet modern business demands.</p>
        `
    },
    
    4: {
        title: "DevSecOps: Security First Approach",
        author: "Security Team",
        role: "Security Engineers",
        date: "Feb 2026",
        readTime: "5 min read",
        content: `
            <h2>The Evolution of DevSecOps</h2>
            <p>DevSecOps represents the evolution of DevOps, integrating security into every phase of the software development lifecycle. This approach ensures that security is not an afterthought but a fundamental component of the development process.</p>
            
            <h2>Why DevSecOps Matters</h2>
            <p>Traditional security approaches often create friction between development and security teams. DevSecOps addresses this by:</p>
            <ul>
                <li>Making security everyone's responsibility</li>
                <li>Automating security checks in CI/CD pipelines</li>
                <li>Enabling faster, more secure deployments</li>
                <li>Reducing security debt over time</li>
                <li>Improving compliance and audit readiness</li>
            </ul>
            
            <h2>Core DevSecOps Principles</h2>
            <p>Successful DevSecOps implementation relies on these key principles:</p>
            <ul>
                <li><strong>Security as Code:</strong> Treat security policies and configurations as code</li>
                <li><strong>Automation First:</strong> Automate security testing and enforcement</li>
                <li><strong>Continuous Monitoring:</strong> Monitor security posture in real-time</li>
                <li><strong>Shift Left:</strong> Address security early in development</li>
                <li><strong>Culture of Shared Responsibility:</strong> Everyone owns security</li>
            </ul>
            
            <h2>Implementing Security in CI/CD</h2>
            <p>Integrate security checks at each stage of your pipeline:</p>
            <ol>
                <li><strong>Pre-commit:</strong> Code quality and basic security scans</li>
                <li><strong>Build:</strong> Dependency scanning and vulnerability assessment</li>
                <li><strong>Test:</strong> Dynamic application security testing (DAST)</li>
                <li><strong>Deploy:</strong> Infrastructure security validation</li>
                <li><strong>Runtime:</strong> Continuous monitoring and threat detection</li>
            </ol>
            
            <h2>Key Security Tools</h2>
            <p>Modern DevSecOps relies on various tools and technologies:</p>
            <ul>
                <li><strong>Static Analysis:</strong> SAST tools like SonarQube, Checkmarx</li>
                <li><strong>Dependency Scanning:</strong> Snyk, OWASP Dependency-Check</li>
                <li><strong>Container Security:</strong> Clair, Trivy, Aqua Security</li>
                <li><strong>Infrastructure Security:</strong> Terraform security modules, CloudGuard</li>
                <li><strong>Runtime Protection:</strong> Falco, Aqua CSP, Sysdig Secure</li>
            </ul>
            
            <h2>Security Best Practices</h2>
            <p>Follow these practices to enhance your security posture:</p>
            <ul>
                <li><strong>Least Privilege:</strong> Grant minimum necessary permissions</li>
                <li><strong>Defense in Depth:</strong> Multiple layers of security controls</li>
                <li><strong>Regular Updates:</strong> Keep dependencies and systems patched</li>
                <li><strong>Secrets Management:</strong> Proper handling of sensitive data</li>
                <li><strong>Network Segmentation:</strong> Isolate critical systems</li>
            </ul>
            
            <h2>Measuring Security Success</h2>
            <p>Track key metrics to evaluate your DevSecOps effectiveness:</p>
            <ul>
                <li><strong>Mean Time to Detect (MTTD):</strong> How quickly you find vulnerabilities</li>
                <li><strong>Mean Time to Remediate (MTTR):</strong> How quickly you fix issues</li>
                <li><strong>Vulnerability Density:</strong> Number of vulnerabilities per code unit</li>
                <li><strong>Security Test Coverage:</strong> Percentage of code tested for security</li>
            </ul>
            
            <h2>Common Challenges</h2>
            <p>Be prepared to face these DevSecOps challenges:</p>
            <ul>
                <li>Cultural resistance to change</li>
                <li>Tool integration complexity</li>
                <li>False positives in security scans</li>
                <li>Balancing security with development speed</li>
                <li>Skill gaps in security knowledge</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>DevSecOps is not just about tools and processes—it's about culture. By embedding security into every aspect of development, organizations can build more secure, resilient systems while maintaining the agility needed to compete in today's fast-paced digital landscape.</p>
        `
    },
    
    5: {
        title: "Observability with Prometheus & Grafana",
        author: "Observability Team",
        role: "Monitoring Engineers",
        date: "Feb 2026",
        readTime: "6 min read",
        content: `
            <h2>Understanding Observability</h2>
            <p>Observability goes beyond traditional monitoring by providing deep insights into system behavior. It's the ability to understand a system's internal state from its external outputs, enabling you to ask questions about your system that you haven't anticipated.</p>
            
            <h2>The Three Pillars of Observability</h2>
            <p>Modern observability is built on three fundamental pillars:</p>
            <ul>
                <li><strong>Metrics:</strong> Numerical data points collected over time</li>
                <li><strong>Logs:</strong> Timestamped records of discrete events</li>
                <li><strong>Traces:</strong> Records of requests as they move through distributed systems</li>
            </ul>
            
            <h2>Introduction to Prometheus</h2>
            <p>Prometheus is an open-source monitoring and alerting toolkit designed for reliability and scalability. It has become the de facto standard for metrics collection in cloud-native environments.</p>
            
            <h2>Key Prometheus Features</h2>
            <ul>
                <li><strong>Multi-dimensional data model:</strong> Time series data identified by metric name and key-value pairs</li>
                <li><strong>PromQL:</strong> Powerful query language for data aggregation and analysis</li>
                <li><strong>Pull-based collection:</strong> Efficient HTTP-based metric collection</li>
                <li><strong>Service discovery:</strong> Automatic detection of monitoring targets</li>
                <li><strong>Alerting:</strong> Built-in alerting with flexible rule definitions</li>
            </ul>
            
            <h2>Introduction to Grafana</h2>
            <p>Grafana is an open-source visualization platform that works seamlessly with Prometheus. It provides beautiful dashboards and analytics capabilities that make observability data actionable.</p>
            
            <h2>Grafana Key Features</h2>
            <ul>
                <li><strong>Flexible dashboards:</strong> Create custom visualizations with drag-and-drop interface</li>
                <li><strong>Multiple data sources:</strong> Connect to Prometheus, InfluxDB, Elasticsearch, and more</li>
                <li><strong>Alerting:</strong> Advanced alerting with multiple notification channels</li>
                <li><strong>Templating:</strong> Dynamic dashboards with variable substitution</li>
                <li><strong>Annotations:</strong> Mark important events on graphs</li>
            </ul>
            
            <h2>Setting Up Prometheus</h2>
            <p>Getting started with Prometheus is straightforward:</p>
            <ol>
                <li>Download and install Prometheus</li>
                <li>Configure prometheus.yml with your targets</li>
                <li>Set up service discovery for automatic target detection</li>
                <li>Configure alerting rules</li>
                <li>Start collecting metrics from your applications</li>
            </ol>
            
            <h2>Instrumenting Applications</h2>
            <p>To monitor your applications effectively, you need to instrument them with Prometheus client libraries:</p>
            <ul>
                <li><strong>Counter:</strong> Monotonically increasing values (requests, errors)</li>
                <li><strong>Gauge:</strong> Values that can go up or down (memory usage, connections)</li>
                <li><strong>Histogram:</strong> Distribution of values (request durations)</li>
                <li><strong>Summary:</strong> Similar to histogram with client-side aggregation</li>
            </ul>
            
            <h2>Creating Effective Dashboards</h2>
            <p>Design dashboards that provide actionable insights:</p>
            <ul>
                <li>Start with high-level system health metrics</li>
                <li>Include business metrics alongside technical metrics</li>
                <li>Use appropriate visualization types for different data</li>
                <li>Set up clear thresholds and alerting</li>
                <li>Regularly review and refine dashboards</li>
            </ul>
            
            <h2>Best Practices</h2>
            <p>Follow these practices for effective observability:</p>
            <ul>
                <li><strong>Define meaningful metrics:</strong> Focus on business-relevant data</li>
                <li><strong>Use consistent naming conventions:</strong> Follow Prometheus naming guidelines</li>
                <li><strong>Implement proper labeling:</strong> Use labels for effective filtering and aggregation</li>
                <li><strong>Set up alerting:</strong> Proactively notify about issues</li>
                <li><strong>Monitor your monitoring:</strong> Ensure observability systems are reliable</li>
            </ul>
            
            <h2>Advanced Topics</h2>
            <p>As your observability needs grow, consider these advanced topics:</p>
            <ul>
                <li><strong>Distributed tracing:</strong> Add Jaeger or Zipkin for request tracing</li>
                <li><strong>Log aggregation:</strong> Use Loki or ELK stack for centralized logging</li>
                <li><strong>Service meshes:</strong> Istio or Linkerd for automatic observability</li>
                <li><strong>Chaos engineering:</strong> Test system resilience with controlled failures</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>Observability with Prometheus and Grafana provides the foundation for understanding and improving your systems. By implementing comprehensive monitoring, alerting, and visualization, you can build more reliable, performant applications that meet the demands of modern users.</p>
        `
    }
};

/**
 * Generate Table of Contents from blog content
 */
function generateTableOfContents() {
    const blogContent = document.getElementById('blog-content');
    const tocNav = document.getElementById('toc-nav');
    
    if (!blogContent || !tocNav) return;
    
    // Clear existing TOC
    tocNav.innerHTML = '';
    
    // Get all headings from blog content
    const headings = blogContent.querySelectorAll('h2, h3, h4');
    
    if (headings.length === 0) {
        // Hide TOC if no headings found
        const tocSidebar = document.getElementById('toc-sidebar');
        if (tocSidebar) {
            tocSidebar.style.display = 'none';
        }
        return;
    }
    
    // Generate TOC items
    headings.forEach((heading, index) => {
        // Create unique ID for heading if it doesn't exist
        if (!heading.id) {
            heading.id = `heading-${index}`;
        }
        
        // Create TOC link
        const tocLink = document.createElement('a');
        tocLink.href = `#${heading.id}`;
        tocLink.textContent = heading.textContent.trim();
        tocLink.className = 'toc-link';
        
        // Add indentation based on heading level
        if (heading.tagName === 'H3') {
            tocLink.style.paddingLeft = '1.5rem';
        } else if (heading.tagName === 'H4') {
            tocLink.style.paddingLeft = '2.5rem';
        }
        
        // Add click event for smooth scrolling and active state
        tocLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all TOC links
            document.querySelectorAll('.toc-link').forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Smooth scroll to heading
            const targetElement = document.getElementById(heading.id);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
        
        tocNav.appendChild(tocLink);
    });
    
    // Show TOC sidebar
    const tocSidebar = document.getElementById('toc-sidebar');
    if (tocSidebar) {
        tocSidebar.style.display = 'block';
    }
    
    // Add scroll spy to update active TOC item
    setupScrollSpy();
}

/**
 * Setup scroll spy to update active TOC item based on scroll position
 */
function setupScrollSpy() {
    const headings = document.querySelectorAll('#blog-content h2, #blog-content h3, #blog-content h4');
    const tocLinks = document.querySelectorAll('.toc-link');
    
    if (headings.length === 0 || tocLinks.length === 0) return;
    
    function updateActiveTOC() {
        let currentHeading = null;
        
        // Find the heading that's currently in view
        headings.forEach(heading => {
            const rect = heading.getBoundingClientRect();
            if (rect.top <= 100) { // 100px offset from top
                currentHeading = heading;
            }
        });
        
        // Update active TOC link
        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (currentHeading && link.getAttribute('href') === `#${currentHeading.id}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Throttle scroll events
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(updateActiveTOC);
            ticking = true;
        }
        }
    
    window.addEventListener('scroll', requestTick);
}

/**
 * Load and render blog content
 */
function loadBlogContent() {
    // Get blog ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id');
    
    // Hide loading state
    document.getElementById('loading-state').style.display = 'none';
    
    // Check if blog exists
    if (!blogs[blogId]) {
        showError();
        return;
    }
    
    const blog = blogs[blogId];
    
    // Update page title
    document.getElementById('blog-page-title').textContent = `${blog.title} - Shuroq Technology Services`;
    
    // Populate blog content
    document.getElementById('blog-title').textContent = blog.title;
    document.getElementById('blog-author').textContent = blog.author;
    document.getElementById('blog-date').textContent = blog.date;
    document.getElementById('blog-readtime').textContent = blog.readTime;
    document.getElementById('author-name').textContent = blog.author;
    document.getElementById('author-role').textContent = blog.role;
    document.getElementById('blog-content').innerHTML = blog.content;
    
    // Generate unique author image based on author name
    const authorSeed = blog.author.replace(/\s+/g, '').toLowerCase();
    document.getElementById('author-image').src = `https://picsum.photos/seed/${authorSeed}/80/80.jpg`;
    
    // Show blog content with animation
    const blogContainer = document.getElementById('blog-content-container');
    blogContainer.style.display = 'block';
    blogContainer.style.opacity = '0';
    blogContainer.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        blogContainer.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        blogContainer.style.opacity = '1';
        blogContainer.style.transform = 'translateY(0)';
    }, 100);
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add reading progress indicator
    addReadingProgress();
    
    // Add table of contents for long articles
    addTableOfContents();
}

/**
 * Show error state
 */
function showError() {
    document.getElementById('loading-state').style.display = 'none';
    document.getElementById('error-state').style.display = 'block';
}

/**
 * Add reading progress indicator
 */
function addReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #3b82f6, #8b5cf6);
        z-index: 9999;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

/**
 * Add table of contents for long articles
 */
function addTableOfContents() {
    const content = document.getElementById('blog-content');
    const headings = content.querySelectorAll('h2, h3');
    
    if (headings.length < 3) return; // Only add TOC for articles with 3+ headings
    
    const toc = document.createElement('div');
    toc.className = 'table-of-contents';
    toc.innerHTML = '<h3>Table of Contents</h3>';
    
    const tocList = document.createElement('ul');
    headings.forEach((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;
        
        const li = document.createElement('li');
        li.innerHTML = `<a href="#${id}">${heading.textContent}</a>`;
        tocList.appendChild(li);
    });
    
    toc.appendChild(tocList);
    
    // Add TOC styles
    const tocStyles = document.createElement('style');
    tocStyles.textContent = `
        .table-of-contents {
            background: #f8f9fa;
            padding: 1.5rem;
            border-radius: 8px;
            margin: 2rem 0;
            border-left: 4px solid #3b82f6;
        }
        .table-of-contents h3 {
            margin-bottom: 1rem;
            color: #1a1a1a;
            font-size: 1.25rem;
        }
        .table-of-contents ul {
            list-style: none;
            padding: 0;
        }
        .table-of-contents li {
            margin-bottom: 0.5rem;
        }
        .table-of-contents a {
            color: #3b82f6;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        .table-of-contents a:hover {
            color: #2563eb;
            text-decoration: underline;
        }
    `;
    document.head.appendChild(tocStyles);
    
    // Insert TOC after author box
    const authorBox = document.querySelector('.author-box');
    authorBox.parentNode.insertBefore(toc, authorBox.nextSibling);
}

/**
 * Initialize blog page
 */
document.addEventListener('DOMContentLoaded', function() {
    loadBlogContent();
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            window.location.href = 'blogs.html';
        }
    });
    
    // Add print styles
    const printStyles = document.createElement('style');
    printStyles.textContent = `
        @media print {
            .blog-container {
                max-width: none;
                padding: 0;
            }
            .back-link, .author-box, .blog-meta {
                display: none;
            }
        }
    `;
    document.head.appendChild(printStyles);
});

// Handle page visibility for performance
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause animations when page is hidden
        document.querySelectorAll('.blog-container > *').forEach(element => {
            element.style.animationPlayState = 'paused';
        });
    } else {
        // Resume animations when page is visible
        document.querySelectorAll('.blog-container > *').forEach(element => {
            element.style.animationPlayState = 'running';
        });
    }
});
